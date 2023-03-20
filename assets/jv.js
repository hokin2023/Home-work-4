var timerEl = document.querySelector(".timer-count");
var startButtonEl = document.querySelector(".start-button");
var result = document.querySelector(".resu")


var hi = document.querySelector(".hide");
var hi2 = document.querySelector('.hide-2')
var gameO = document.querySelector('#over')
var questionConEl = document.getElementById('question-container')

//var answerBtn = document.getElementById('hide');
var shuffledQuestions, currentQuestionIndex
var currentQuestionIndex = 0;
var inInput = document.querySelector(".initials")
var grade = document.querySelector(".score")
var scoreEl = document.querySelector(".score-El")
var scoreList = [];

var questionEl = document.getElementById('question');
var answerBtnEl = document.getElementById('answer-buttons');
var Btn1 = document.querySelector('.btn1');
var Btn2 = document.querySelector('.btn2');
var Btn3 = document.querySelector('.btn3');
var Btn4 = document.querySelector('.btn4');
var secondsLeft = 120;
var timer;
var submitBtn = document.querySelector('.submit-btn');
var End = document.querySelector(".the-end");

var quizB = document.querySelector(".quiz-body");

var questions = [
    {
        question: 'The condition in an if / else statement is enclosed with______.',
        answers: ['1.quotes', '2. curly brackets', '3.parenthesis', '4.square brackets'],
        correctAnswers: '2'   
    },
    {
        question: 'Commonly used data types Do Not Include:',
        answers: ['1.strings', '2.booleans', '3.alerts', '4.numbers'],
        correctAnswers: "3"
    },
    {
        question: 'Array in Javascript can be used to store______.',
        answers: ['1.numbers and strings', '2.other arrays', '3.booleans', '4.all of the above'],
        correctAnswers: "3"

    },
    {
        question: 'String values must be enclosed within______ when being assigned to variables.',
        answers: ['1.commas', '2.curly brackets', '3.quotes', '4.parenthesis'],
        correctAnswers: "3"
    },
]
// start timer
startButtonEl.addEventListener("click", StartGame)  
answerBtnEl.addEventListener('click', selectAnswer)
submitBtn.addEventListener('click', addScore)

// set timer
function setTime () {
    timer = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft
        questionConEl.classList.remove('hide');
    if (secondsLeft === 0 || currentQuestionIndex === questions.length) {
        clearInterval(timer);
       startButtonEl.style.display = 'none';
       questionConEl.style.display = 'none';
       gameO.classList.remove('hide-2')
       timerEl.style.display ='none'
       End.style.display = "block";
        grade.textContent = secondsLeft
    
    }
}, 1000);
}
// Start quiz with timer
function StartGame() {
startButtonEl.style.display = 'none';
End.style.display = 'none';
currentQuestionIndex = 0;

setTime ();
setNextQuestion(currentQuestionIndex);

}
// display next question
function setNextQuestion(i) {
    if (i < questions.length) {
        questionEl.textContent = questions[i].question;
Btn1.textContent = questions[i].answers[0];
Btn2.textContent = questions[i].answers[1];
Btn3.textContent = questions[i].answers[2];
Btn4.textContent = questions[i].answers[3];
    }
}
// select answer and move to the next one
function selectAnswer(event) {
event.preventDefault();

    var result = document.createElement('h2')
    answerBtnEl.appendChild(result)

setTimeout(function () {
    result.style.display ='none';
}, 1000);

if (questions[currentQuestionIndex].correctAnswers === event.target.value) {
result.textContent = "Correct!";
} else if (questions[currentQuestionIndex].correctAnswers !== event.target.value) {
    secondsLeft = secondsLeft -10;
    result.textContent = "Wrong!";
}
if (currentQuestionIndex < questions.length) {
    currentQuestionIndex++;

}
// move to next question if answer is clicked
setNextQuestion(currentQuestionIndex);
} 

function addScore (event) {
    event.preventDefault();
    End.style.display = 'none'
    scoreEl.style.display = 'block'
timerEl.textContent = 'Your score is' + secondsLeft
    var save = inInput.value.toUpperCase();
    scoreList.push({ initials: save, score: secondsLeft });

    scoreEl.innerHTMl = "";
    for (var i = 0; i < scoreList.length; i++) {
        var li = document.createElement("li");
        li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
scoreEl.append(li);
    }
storeScores();
displayScores();


}

function storeScores() {
    localStorage.setItem('scoreList', JSON.stringify(scoreList));

}

function displayScores() {
    let storedScoreList = JSON.parse(localStorage.getItem('scoreList'));
    if (scoreList !== null) {
        scoreList = storedScoreList;
    }
}

























