<template>
  <!--Calling regform-->
 <regform/>
</template>

<script>
/*Import regform */
import regform from './components/regform.vue'


/*Calling regform*/
export default {
  name: 'App',
  components: { regform }
}
</script>

<!-- Style for entire Page -->

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');


#app {
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 155px;
  
}


body{
  margin: 0;
  background: #eee;
  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  background-image: url('https://miro.medium.com/v2/resize:fit:1400/1*8mNNZuvAjFWcFCcqEDMUpQ.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  overflow-Y: hidden;
  overflow-X: hidden;
}

</style>
