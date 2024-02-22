    
const quizdata = [
    {
        question: 'What is your Name?',
        a: 'Yumesh',
        b: 'Vignesh',
        c: 'Yuga',
        d:'Thennarasan',
        correct: 'a'
    },{
        question: 'How old are you?',
        a: '18',
        b: '20',
        c: '25',
        d: '30',
        correct: 'b'
    },{
        question: 'Where are you from?',
        a: 'Pondy',
        b: 'Chennai',
        c: 'Madurai',
        d: 'CBE',
        correct: 'a'
    },{
        question: 'choose your Passion',
        a: 'Coding',
        b: 'Gaming',
        c: 'Racer',
        d: 'VIP',
        correct :'b'
    }
];

const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
let currentdata = 0;

loadquiz();

function  loadquiz(){

    const currentquizdata = quizdata[currentdata];

    questionE1.innerText = currentquizdata.question;

    a_text.innerText = currentquizdata.a;

    b_text.innerText = currentquizdata.b;

    c_text.innerText = currentquizdata.c;

    d_text.innerText = currentquizdata.d;


}

addEventListener("click", () => {
    currentdata++;

    if(currentdata < quizdata.length){
    
    loadquiz();
    }else{
  alert("BOOM")
    }


})
1:21:45

