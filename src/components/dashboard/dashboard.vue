<script>

    export default{
        template: require('./dashboard.html'),
        ready(){
          let hashValue = window.location.hash.replace(/^.*?#/, '');
          if(hashValue){
            console.log(hashValue);
            var pairs = hashValue.split('&');
            let access_token = pairs[0].split('=')[1];
            let id_token = pairs[1].split('=')[1];
            //console.log(access_token);
            //console.log(id_token);
            localStorage.setItem('id_token', id_token);
            localStorage.setItem('access_token', access_token);
          }

        },
        data(){
            return{

            }
        },
        components:{
          sidemenu: require('./sidemenu/sidemenu.vue'),
        },

    }
</script>
