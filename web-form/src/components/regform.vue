<template>
<!--Form Page Content-->

  <form @submit="submitForm">
   <div class="logo">
    <img src="../assets/logo1.png" alt="logo">
    </div>
    <h2 class="text">Welcome</h2>  
    <p class="normal-text">Please enter the details provided by your clinic</p>
     
      <label>Enter your email:</label>
      <input type="email" required v-model="email" @input="validateForm">
  
      <label>Enter your password:</label>
      <input type="password" required  v-model="password" @input="validateForm">
  
       <label >Select your language </label>
          <select id="selectOption" v-model="selectedOption" required @input="validateForm" class="custom-select" >
          <option value="English">English</option>
          <option value="Tamil">Tamil</option>
          <option value="Hindi">Hindi</option>
          <option value="Telugu">Telugu</option>
          </select>
      
      <!--Button-->
      <div class="submit">
          <button :disabled="!isFormValid" type="submit">Get Started</button>
      </div>
      <p class="copyright">Copyright &copy; 2024 Longboat | Privacy Policy</p>
     </form>
     
  </template>
  <!--Form Content End!!-->
  

  <!--Script Logic-->
  <script>
  export default {
   data() {
      return{
          email : '',
          password : '',
          isFormValid: '',
          selectedOption:'English'
      };
    },
      methods: {
      validateForm() {
        if (!this.email.trim() !== '' && this.password.trim() !== '') {
          this.isFormValid = true; }
              
             else {
          this.isFormValid = false;
         }
          },
  
      submitForm() {
       if (this.isFormValid) {
        console.log('Form');
       alert('Form submitted successfully');
        }
      }
    }
  };

   </script>
  
   <!--Script Ends-->

 
   <!--Sccss style-->

   <style>
   
   form {
  max-width: 420px;
  margin: 30px auto;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
   
    }

  label {
  color: rgb(108, 108, 108);
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8rem;
  letter-spacing: 1px;
  }

  input, select {
  display: block;
  padding: 10px 6px;
  width: 90%;
  box-sizing: border-box;
  border: 0;
  }

  button{
  background: #446cff;
  border: 0;
  padding: 10px 90px;
  margin-top: 20px;
  color: white;
  cursor: pointer;
  width: 90%;
  position: relative;
  right: 5%;

  }
  
  .submit{
  text-align: center;
  }
  
  .error{
  color: #1d570d;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
  }

  .logo{
  position: relative;
  text-align: center; 
}

 .normal-text {
  font-weight: normal;
  color:#949494;
  margin-top: 4px;
}
 .text{
  font-weight: normal;
  color:#000000;
  margin-bottom: 5px;
}
 .copyright {
  position: absolute;
  bottom: 2%;
  right: 1%;
  font-size: 12px; 
  color: #999; 
}
 .custom-select {
  width: 90%; 
  cursor: pointer;
  background: none;
  background-color: white;
  
}

/*Media query for mobile device*/
  @media only screen and (max-width: 480px) {
    .bg-image{
    display: none;
        
    }
  }
  </style>
  