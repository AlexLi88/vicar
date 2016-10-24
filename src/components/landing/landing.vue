<!--TODO: Check expired token in ready-->
<template>
  <wheader></wheader>
  <div class="video-hero-module">
    <div class="video-container">
      <video autoplay loop class="fillWidth">
        <source :src="video_mp4" type="video/mp4"/>
        <source :src="video_webm" type="video/webm"/>
      </video>
      <div class="cover">
        <div class="landing_container">
          <div class="leftColumn">
            <div class="left-container">
              <h1>Rigester as a driver.</h1>
              <div class="left-desc">Sign up as a driver. Make money $$$$.</div>
            </div>
          </div>

          <div class="rightColumn">
            <div class="right-container">
              <h1>I need a car.</h1>
              <div class="right-desc">Need a car to ferry?  Sign up here!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    require('./landing.scss')
    export default{
        ready(){
          console.log('aaaa');
          console.log(localStorage.getItem('id_token'));
//          setInterval(()=>{
//            if(localStorage.getItem('id_token')){
//              console.log('bbbb');
//              this.$route.router.go({path: '/dashboard'});
//            }else{
//              console.log('cccc');
//            }
//          },500)

        },
        data(){
            return{
                video_mp4: require('../../assets/Traffic-Ahead/MP4/Traffic-Ahead.mp4'),
                video_webm: require('../../assets/Traffic-Ahead/WEBM/Traffic-Ahead.webm'),
                video_jpg: require('../../assets/Traffic-Ahead/Snapshots/Traffic-Ahead.jpg')
            }
        },
        components:{
          wheader: require('../header/header.vue')
        },

    }
</script>

