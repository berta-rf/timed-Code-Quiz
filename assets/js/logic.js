let startQuiz = document.querySelector('#start');
let finalScore = document.querySelector('#final-score');
let initials = document.querySelector('#initials');
let timer = document.querySelector('#time');
let countdown;
let secondsLeft = 60;
let startScreen = document.querySelector('#start-screen');
let quizScreen = document.querySelector('#questions');
let feedback = document.querySelector('#feedback');
let endScreen = document.querySelector('#end-screen');
let questionTitleEl = document.querySelector('#question-title');
let choicesEl = document.querySelector('#choices');
let questionIndex = 0;
let currentQuestion;
let submitBtn = document.querySelector('#submit');
let correctSound = new Audio('./assets/sfx/correct.wav')
let wrongSound =new Audio('./assets/sfx/incorrect.wav');

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
    
    let choicesOL = document.createElement ('ol');
    choicesEl.appendChild(choicesOL);

    // choice refers to the key (a, b, c or d) and answer is the value (text answer)
    for (const [choice, answer] of Object.entries(currentQuestion.choices)) {
      
        let choiceLI = document.createElement('li');
        let choiceBtn = document.createElement('button');
        choiceBtn.textContent = `${choice}: ${answer}`;
        choiceLI.appendChild(choiceBtn);
        choicesOL.appendChild(choiceLI);
        choiceBtn.dataset.choice = choice; // assigns a dataset with the key 'choice' to the answers  button  
    }
}

// WHEN I answer a question
// THEN I am presented with another question
choicesEl.addEventListener('click', function(event) {
    let choiceLI = event.target;

    if (choiceLI.dataset.choice !== currentQuestion.correct) {
        
        // Plays wrong answer sound
        wrongSound.play();
        // WHEN I answer a question incorrectly
        // THEN time is subtracted from the clock
        feedback.style.display = 'block';
        feedback.textContent = "WRONG!"

        if (secondsLeft < 10) {
            secondsLeft = 0;
        } else {
            secondsLeft -= 10;
        }
    } else {
        feedback.style.display = 'block';
        feedback.textContent = "CORRECT!"
        // Plays correct answer sound
        correctSound.play();
    }

    if (questions.length === questionIndex + 1){
        // WHEN all questions are answered 
        // THEN the game is over
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
        // WHEN the timer reaches 0
        // THEN the game is over
            endGame();
        }
    
    }, 1000); 
}

function endGame() {

    clearInterval(countdown);
    feedback.style.display = 'none';
    quizScreen.style.display = 'none';
    endScreen.style.display = 'block';
    finalScore.textContent = secondsLeft;
}  

// // WHEN the game is over
// // THEN I can save my initials and score

// Load old scores from localStorage
if (!localStorage.getItem('highscores')) {
    localStorage.setItem('highscores', JSON.stringify([]));
}

let highscores = JSON.parse(localStorage.getItem('highscores'));

// When you click 'Submit' after initials input
submitBtn.addEventListener('click', submitScore);
// When you press 'Enter' after initials input
initials.addEventListener('keydown', function(e){
   
    if (e.code === "Enter") {  // only if the key pressed is "Enter"
        submitScore();
    }
});

function submitScore() {
    
    // Alerts the user to enter initials if they leave input blank or with spaces
    if (initials.value.trim() == '') {
        alert('Please enter your initials');
    } else {
        initials = initials.value;
        // Add a new score object to the highscores array
        highscores.push(
            {
            initials: initials,
            score: secondsLeft,
            }
        );

        localStorage.setItem('highscores', JSON.stringify(highscores));

        // Clear the initials text input so it's empty next time
        initials.value = '';
        // Go to the Highscores page
        location.href = './highscores.html';
    }
}

