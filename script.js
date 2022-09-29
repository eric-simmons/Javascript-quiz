var questionEl = document.getElementById("question")
var startEl = document.getElementById("start")
var timerEl = document.getElementById("timer")
var content = document.getElementById("content")

var answersEl = document.getElementById("answers")
// var answer1 = document.getElementById("answer1")
// var answer2 = document.getElementById("answer2")
// var answer3 = document.getElementById("answer3")
// var answer4 = document.getElementById("answer4")
var btnCreate = document.createElement('button')



var questionIndex = 0
var currentTime = 76

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
    countdown();
    reset();
    displayQuestion();
    // displayAnswers();
});


function displayQuestion() {
    for (var i = 0; i < questionList.length; i++) {
        // questionIndex = i;
        var currentQuestion = questionList[questionIndex].question;
        var currentChoices = questionList[questionIndex].choices
        question.innerHTML = currentQuestion;

    }
   
currentChoices.forEach(function (newItem){
    var listItem = document.createElement("button");
    listItem.textContent = newItem;
    content.appendChild(btnCreate);
    answersEl.appendChild(listItem);
    listItem.addEventListener("click", (answerCheck));


})


 

}

// function displayAnswers() {
//     for (var i = 0; i < questionList.choices[0]; i++) {

//         var answerButton = document.createElement('button')
//         answerButton.innerHTML = questionList.choices[i]
//         answerButton.addEventListener('click', answerCheck)
//         answersEl.appendChild(answerButton)

//         console.log(answerButton)
//     }
// }













function reset() {
    // questionEl.innerHTML = ''
    // answersEl.innerHTML = ''
}
//countdown from 76
function countdown() {
    //var penalty = 10;
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
    if (questionList[questionIndex].answer === userAnswer.innerText) {
        console.log("correct")
    }
    else(
        console.log('incorrect')
    )
}