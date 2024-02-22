
const days1 = document.getElementById('days');
const hours1 = document.getElementById('hours');
const minutes1 = document.getElementById('minutes');
const seconds1 = document.getElementById('seconds');



const date = new Date();


function timer(){

const days = date.getDate();



const hours = date.getHours()

const minutes = date.getMinutes()


const seconds = date.getSeconds()



days1.innerHTML = days;
hours1.innerHTML = hours;
minutes1.innerHTML = minutes;
seconds1.innerHTML = seconds;

}

timer();

setInterval(timer,1000);