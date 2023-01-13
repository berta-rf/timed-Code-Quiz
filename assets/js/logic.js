const startQuiz = document.querySelector('#start');
let finalScore = document.querySelector('#final-score');
let timer = document.querySelector('#time');
let startScreen = document.querySelector('#start-screen');
let quizScreen = document.querySelector('#questions');
let questionIndex = 0;
let currentQuestion = questions[questionIndex];

// GIVEN I am taking a code quiz
// WHEN I click the start button
startQuiz.addEventListener('click', function(){
    // THEN a timer starts and I am presented with a question
    startScreen.style.display = 'none';
    showQuestion();
    timerCount();
    
});

   
function showQuestion() {
    
    quizScreen.style.display = 'block';
    let questionTitleEl = document.querySelector('#question-title');
    let choicesEl = document.querySelector('#choices');

    questionTitleEl.textContent = currentQuestion.question;
    
    let choicesOL = document.createElement ("ol");
    choicesEl.appendChild(choicesOL);

    // choice refers to the key (a, b, c or d) and answer is the value (text answer)
    for (const [choice, answer] of Object.entries(currentQuestion.choices)){
      
        let choiceLI = document.createElement("li");
        choiceLI.textContent = `${choice}: ${answer}`;
        choicesOL.appendChild(choiceLI);
    }
}


// WHEN I answer a question
// THEN I am presented with another question

// addEventListener click to choices list items so it calls showQuestion()
// function rightAnswer();
    // showQuestion();
 

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// function wrongAnswer();
    //deduct 10 secs
    //if timer > 0 then showQuestion();


// function to start timer countdown
function timerCount() {
    
    let secondsLeft = 60;
    let countdown = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        
        if(secondsLeft === 0) {
            clearInterval(countdown);
        }
        
    }, 1000);
    
    // finalScore.textContent = secondsLeft;
    
}



// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score