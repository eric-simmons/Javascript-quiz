// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score





var questionEl = document.getElementById("question")
var startEl = document.getElementById("start")
var timerEl = document.getElementById("timer")
var content = document.getElementById("content")
var answersEl = document.getElementById("answers")

var btnCreate = document.createElement('button')
var isPaused = true


var questionIndex = 0
var currentTime = 76
var timePenalty = 5


answersEl.style.display = "none"

var questionList = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];

//start game
startEl.addEventListener('click', function startGame() {
    startEl.style.display = "none"
    answersEl.style.display = "initial"
    countdown()
    reset()
    displayQuestion()
});


function displayQuestion() {
    for (var i = 0; i < questionList.length; i++) {
        
        var currentQuestion = questionList[questionIndex].question;
        var currentChoices = questionList[questionIndex].choices
        question.innerHTML = currentQuestion;
    }

    currentChoices.forEach(function (newItem) {
        var listItem = document.createElement("button");
        listItem.textContent = newItem;
        answersEl.appendChild(listItem);
        listItem.addEventListener("click", (answerCheck));
    })
}


function reset() {
     questionEl.innerHTML = ''
     answersEl.innerHTML = ''
}
//countdown from 76
function countdown() {
    
    setInterval(function () {        
            currentTime -= 1
        
        timerEl.textContent = currentTime + ' seconds remaining'

        if (currentTime == 0) {
            timerEl.textContent = 'Times Up!'
            //endGame();
            clearInterval();
        }

    }, 1000)
}

function answerCheck(event) {
    var userAnswer = event.target

    //correct answer
    if (questionList[questionIndex].answer === userAnswer.innerText) {
        console.log("correct")
    }
    //incorrect
    else {
        currentTime = currentTime - timePenalty
        console.log("incorrect")
    }
    console.log(questionIndex)
    questionIndex++
    reset()
    displayQuestion()
}

