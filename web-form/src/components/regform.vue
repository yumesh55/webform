<template>
<form @submit.prevent="submitForm">
    <label>Email:</label>
    <input type="email" required v-model="email" @input="validateForm">

    <label>Password:</label>
    <input type="password" required v-model="password" @input="validateForm">
    <div v-if="passworderror" class="error">{{ passworderror }}</div>

    <label>Select your language</label>

    <select v-model="option">
        <option value="English">English</option>
        <option value="Tamil">Tamil</option>
        <option value="Hindi">Hindi</option>
    </select>

    <div class="submit">
        <button :disabled="!isFormValid" type="submit">Get Started</button>
    </div>

    <div v-if="showAlert" class="alert">
        Form Submitted Successfully!
      </div>

      
  
</form>

</template>

<script>

export default {
 data() {
    return{
        email : '',
        password : '',
        passworderror: '',
        isFormValid: '',
        option: '',
        showAlert: ''
        
    };
  },
  methods: {
    validateForm() {
      if (this.email.trim() !== '' && this.password.trim() !== '') {
        this.isFormValid = true;
        
        
      } else {
        this.isFormValid = false;
      
  
        
      }
      
    },
    
    submitForm() {

      if (this.isFormValid) {

 
        console.log('Form submitted successfully');
      }
    }
  }
};
    

    
 
 


</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
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

color: #ff0062;
margin-top: 10px;
font-size: 0.8em;
font-weight: bold;
}
</style>
