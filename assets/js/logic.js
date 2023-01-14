const startQuiz = document.querySelector('#start');
let finalScore = document.querySelector('#final-score');
let timer = document.querySelector('#time');
let countdown;
let secondsLeft = 60;
let startScreen = document.querySelector('#start-screen');
let quizScreen = document.querySelector('#questions');
let endScreen = document.querySelector('#end-screen');
let questionTitleEl = document.querySelector('#question-title');
let choicesEl = document.querySelector('#choices');
let questionIndex = 0;
let currentQuestion;

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
startQuiz.addEventListener('click', function() {
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
    for (const [choice, answer] of Object.entries(currentQuestion.choices)) {
      
        let choiceLI = document.createElement("li");
        choiceLI.textContent = `${choice}: ${answer}`;
        choicesOL.appendChild(choiceLI);
        choiceLI.dataset.choice = choice; // assigns a dataset with the key 'choice' to the answers    
    }
}

// WHEN I answer a question
// THEN I am presented with another question
choicesEl.addEventListener('click', function(event) {

    let choiceLI = event.target;
    if (choiceLI.dataset.choice !== currentQuestion.correct) {
        // WHEN I answer a question incorrectly
        // THEN time is subtracted from the clock
        if (secondsLeft < 10) {
            secondsLeft = 0;
        } else {
            secondsLeft -= 10;
        }
    }

    if (questions.length === questionIndex + 1){
        endGame();

    } else {
        questionIndex++;
        showQuestion();
    }
});

// function to start timer countdown
function timerCount() {
    
        countdown = setInterval(function() {

        if (secondsLeft > 0) {
            secondsLeft--;
        }
   
        timer.textContent = `${secondsLeft} seconds`;

        if (secondsLeft === 1){
            timer.textContent = `${secondsLeft} second`;
        }

        if(secondsLeft <= 0) {
            endGame();
        }
    
    }, 1000); 
}

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
function endGame() {
    
    clearInterval(countdown);
    quizScreen.style.display = 'none';
    endScreen.style.display = 'block';
    finalScore.textContent = secondsLeft;

}
// WHEN the game is over
// THEN I can save my initials and score