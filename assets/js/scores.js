let clearBtn = document.querySelector('#clear');
let scoresOL = document.querySelector('#highscores');
let highscores = JSON.parse(localStorage.getItem('highscores'));

// When a new score is submited, then a new list item is created on highscores
//(choice refers to the key (a, b, c or d) and answer is the value (text answer))
for (i in highscores) {

    let initials = highscores[i].initials.toUpperCase();
    let scoresLI = document.createElement("li");
    scoresLI.textContent = `${initials} - score: ${highscores[i].score}`;
    scoresOL.appendChild(scoresLI);
}

// When I press the button 'Clear Highscores', all stored scores are cleared
clearBtn.addEventListener('click', function(){

    localStorage.clear();
    location.href = './highscores.html';
});
