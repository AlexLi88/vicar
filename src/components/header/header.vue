<template>
    <div>
      <div class="ui computer tablet only row">
        <div class="ui fixed menu navbar">
          <a class="brand item">Vicar</a>
          <a class="item">Price</a>
          <a class="item">Contact</a>
          <a class="item right" @click="login()" v-show="!authenticated">Log In</a>
          <a class="item right" @click="logout()" v-show="authenticated">Log Out</a>
        </div>
      </div>

    </div>
</template>

<script>
    require('./header.scss')
    export default{
        ready(){
          var self = this;
          this.authenticated = this.checkAuth();
          this.lock.on("authenticated", function(authResult) {
            self.lock.getProfile(authResult.idToken, function(error, profile) {
              if (error) {
                // Handle error
                return;
              }

              localStorage.setItem('id_token', authResult.idToken);
              localStorage.setItem('profile', JSON.stringify(profile));
              self.authenticated = true;
              self.lock.hide();
            });
          });
        },
        data(){
            return{
              authenticated: false,
              AUTH0_CLIENT_ID: 'PsTWeNZlrVlDJRITqt1iIHvjavrACDvE',
              AUTH0_DOMAIN: 'vicars.auth0.com',
              lock: new Auth0Lock('PsTWeNZlrVlDJRITqt1iIHvjavrACDvE', 'vicars.auth0.com', {
                auth: {
                  redirectUrl: location.protocol + "//" + location.host + '/app/passenger',
                  responseType: 'token',
                }
              }),
            }
        },
        components:{

        },
        methods:{
          checkAuth(){
            return !!localStorage.getItem('id_token');
          },
          login() {
            var self = this;

//            this.lock.on('authenticated', (authResult) => {
//              self.lock.getProfile(authResult.idToken, (error, profile) => {
//              if (error) {
//                // Handle error
//                return;
//              }
//              // Set the token and user profile in local storage
//              localStorage.setItem('profile', JSON.stringify(profile));
//            localStorage.setItem('id_token', authResult.idToken);
//
//            self.authenticated = true;
//          });
//          });
//
//            this.lock.on('authorizaton_error', (error) => {
//              // handle error when authorizaton fails
//            });

            this.lock.show();
          },
          logout() {
            var self = this;
            // To log out, we just need to remove the token and profile
            // from local storage
            localStorage.removeItem('id_token');
            localStorage.removeItem('profile');
            self.authenticated = false;
          },

      }
    }
</script>
