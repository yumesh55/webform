<template>
  <!--Calling regform-->
  <div class="container">
    <div class="bg-image">
      <img src="./assets/back.png" alt="" class="image" />
    </div>
    <div class="form">
      <regform />
    </div>
  </div>
</template>

<script>
/*Import regform */

import regform from "./components/regform.vue";

/Calling regform/
export default {
  name: "App",
  components: { regform },
};
</script>

<!-- Style for entire Page -->

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap");

#app {
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  overflow-y: hidden;
  overflow-x: hidden;
}

.container {
  display: flex;
}
.bg-image {
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
 
}

.form {
  flex: 1;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #eaf1f3 ;
  
}
</style>