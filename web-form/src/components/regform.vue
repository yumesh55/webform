<template>
<!--Form Page Content-->

  <form @submit="submitForm">
    <div class="container">
    <i class="fa-solid fa-right-to-bracket"></i></div>
     <i class="fa-regular fa-envelope"></i><label>Email ID:</label>
      <input type="email" required v-model="email" @input="validateForm">
  
      <i class="fa-solid fa-key"></i><label>Password:</label>
      <input type="password" required  v-model="password" @input="validateForm">
  
      
      <i class="fa-solid fa-language"></i><label>Select your language</label>
       <select id="selectOption" v-model="selectedOption" required @input="validateForm">
        <option value="">-- Please select --</option>
          <option value="English">English</option>
          <option value="Tamil">Tamil</option>
          <option value="Hindi">Hindi</option>
          <option value="Telugu">Telugu</option>
      </select>
  
      <!--Button-->
      <div class="submit">
          <button :disabled="!isFormValid" type="submit">Get Started</button>
      </div>
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
          selectedOption:''
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
   
  .container{
  display: flex;
  justify-content: center;
  align-items: center;
    }

  .fa-regular{
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  line-height: 20px;
  border-radius: 50%;
  text-align: center;
  }
  
  .fa-solid{
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  line-height: 20px;
  border-radius: 50%;
  text-align: center;
  }

  form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  font-weight: bold;
  }

  label {
  color: rgb(0, 0, 0);
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  }

  input, select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: solid #ddd;
  color: #555;
  }

  button{
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
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


   
  /*Media query for mobile device*/
  @media only screen and (max-width: 767px) {
    .container {
      padding: 0 100px;
      
    }
  }
  </style>
  