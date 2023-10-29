const start_guess = document.querySelector('.start-guess');
const score_guess = document.querySelector('.score-Guess');
let score_achieved = document.querySelector('.score-Achieved');
const guess = document.querySelector('.Guess')
const check = document.querySelector('.check');
const number = document.querySelector('#number');
let randomnumber = document.querySelector('.RandomNo');
const again = document.querySelector('.again');
const highscore = document.querySelector('.Hgh-score')

let randomNumber = Math.floor(Math.random() * 20) + 1;

let score1 = 20;

check.addEventListener('click',()=>{
    console.log(randomNumber);
    
    if(number.value === ''){
        start_guess.textContent = "Please enter the number"

    }else if(number.value > randomNumber){
        start_guess.innerHTML = "&#x1F4C8;  Number is to big"
        if(score1>0){
            score1 = score1 - 1; 
            score_guess.querySelector('.score').textContent = score1;
        }

    }else if(number.value < randomNumber){
        start_guess.innerHTML = " &#x1F4C9; Number is to small"
        if(score1>0){
            score1 = score1 - 1; 
            score_guess.querySelector('.score').textContent = score1;
        }

    }else if(number.value == randomNumber){
        start_guess.textContent = "Congratulations you won!!!";
        guess.textContent = "Congratulation you won";
        randomnumber.textContent = randomNumber;
        document.querySelector('.whole').style.backgroundColor = '#01ff70'
        
        if(score1 > highscore.textContent){
            highscore.textContent=score1;
        }
    }
 
    score_guess.querySelector('.score').textContent = score1;
    if(score1 == 0){
        document.querySelector('.whole').style.backgroundColor = 'red'
        guess.innerHTML = "Game over try again!"
        randomnumber.textContent = randomNumber;
    }
})

again.addEventListener('click',()=>{
    score_guess.querySelector('.score').textContent= 20
    randomNumber = Math.floor(Math.random() * 20) + 1;
    randomnumber.textContent = "?"
    number.value = ""
    score1 = 20
    document.querySelector('.whole').style.backgroundColor = 'black'
    guess.textContent = 'Guess My Number!'
    start_guess.textContent = "Start Guessing..."
})
