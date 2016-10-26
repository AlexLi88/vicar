<script>
    import dataService from '../../../services/dataServices'
    require('./sidemenu.scss')
    export default{
      template: require('./sidemenu.html'),
        ready(){
          this.getUserProfile();
          if (this.$route.path.indexOf('/driver') > 0) this.selected = 'driver';
        },
        data(){
            return{
              user: {},
              userType: null,
              selected: 'pass'
            }
        },
        components:{

        },
        methods: {
          logout() {
            var self = this;
            console.log('logout');
            // To log out, we just need to remove the token and profile
            // from local storage
            localStorage.removeItem('access_token');
            localStorage.removeItem('id_token');
            localStorage.removeItem('profile');
            self.authenticated = false;
            window.location.href = window.location.origin;
          },
          getUserProfile() {
            setTimeout(()=>{
              dataService.getUser().then((res)=>{
                this.user = res.data;
                this.userType = 'user';
                console.log(this.user);
                }).catch((err)=>{
                  console.log(err);
                console.log('err');
                })
            })

          }
        }
    }
</script>
