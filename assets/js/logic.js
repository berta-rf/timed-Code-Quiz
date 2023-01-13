const startQuiz = document.querySelector('#start');
let finalScore = document.querySelector('#final-score');
let timer = document.querySelector('#time');
let secondsLeft = 90;
let startScreen = document.querySelector('#start-screen');
let quizScreen = document.querySelector('#questions');
let questionTitleEl = document.querySelector('#question-title');
let choicesEl = document.querySelector('#choices');
let questionIndex = 0;
let currentQuestion;

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
startQuiz.addEventListener('click', function(){
    startScreen.style.display = 'none';
    showQuestion();
    timerCount();
    
});
  
function showQuestion() {

    choicesEl.innerHTML = '';
    
    quizScreen.style.display = 'block';
    currentQuestion = questions[questionIndex]
    questionTitleEl.textContent = currentQuestion.question;
    
    let choicesOL = document.createElement ("ol");
    choicesEl.appendChild(choicesOL);

    // choice refers to the key (a, b, c or d) and answer is the value (text answer)
    for (const [choice, answer] of Object.entries(currentQuestion.choices)){
      
        let choiceLI = document.createElement("li");
        choiceLI.textContent = `${choice}: ${answer}`;
        choicesOL.appendChild(choiceLI);
        choiceLI.dataset.choice = choice; // assigns the key 'choice' to the answers    
    }
}

// WHEN I answer a question
// THEN I am presented with another question
choicesEl.addEventListener('click', function(event){

    let choiceLI = event.target;
    if (choiceLI.dataset.choice !== currentQuestion.correct) {
        // WHEN I answer a question incorrectly
        // THEN time is subtracted from the clock
        secondsLeft -= 10;
    }

    questionIndex++;
    showQuestion();

});


// function wrongAnswer();
    //deduct 10 secs
    //if timer > 0 then showQuestion();


// function to start timer countdown
function timerCount() {
    
    let countdown = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        
        if(secondsLeft <= 0) {
            clearInterval(countdown);
        }
        
    }, 1000);
    
    // finalScore.textContent = secondsLeft;
    
}



// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score