/**
 * Created by Alex on 2016-08-29.
 */
export default(App)=>{
  var dataService = require('./services/dataServices')
  var VueRouter = require('vue-router')
  var router = new VueRouter({
    hashbang: false,
    history: true,
    root: '/'
  })
  router.beforeEach((transition)=>{
    var verifyTransition = setInterval(()=>{
        if(localStorage.getItem('id_token'))
        {
          clearInterval(verifyTransition);
          dataService.getUser().then((res)=>{
            if (transition.to.path.indexOf('/app') < 0) {
                transition.redirect('/app/passenger');
            }else{
              transition.next();
              window.scrollTo(0, 0);
            }
          }).catch((err)=>{
            console.log('err in trouter');
            transition.next();
            window.scrollTo(0,0);
          });
        }else{
          clearInterval(verifyTransition);
          transition.next();
          window.scrollTo(0, 0);
        }
      });
  });

  router.redirect({
    '/app': '/app/passenger'
  })
  router.map({
    '/': {
      component: require('./components/landing/landing.vue')
    },
    '/app':{
      component: require('./components/dashboard/dashboard.vue'),
      subRoutes:{
        '/passenger': {
          component: require('./components/dashboard/passenger/passenger.vue')
        },
        '/driver': {
          component: require('./components/dashboard/driver/driver.vue')
        }
      },
    }
  })

  router.start(App, '#app')
}
