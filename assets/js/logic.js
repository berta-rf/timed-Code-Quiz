const startQuiz = document.querySelector('#start');
let finalScore = document.querySelector('#final-score');
let timer = document.querySelector('#time');


// GIVEN I am taking a code quiz
// WHEN I click the start button
startQuiz.addEventListener('click', function(){
    // THEN a timer starts and I am presented with a question
    timerCount();
    quiz();

});

// WHEN I answer a question
// THEN I am presented with another question
function quiz() {

   
}


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock


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