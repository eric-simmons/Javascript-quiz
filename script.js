var questionEl = document.getElementById("question")
var startEl = document.getElementById("start")
var timerEl = document.getElementById("timer")
var content = document.getElementById("content")

var answersEl = document.getElementById("answers")
var answer1 = document.getElementById("answer1")
var answer2 = document.getElementById("answer2")
var answer3 = document.getElementById("answer3")
var answer4 = document.getElementById("answer4")



var questionIndex = 0
var currentTime = 76

answersEl.style.display = "none"

var questionList = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: 2
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: 3
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: 4
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: 3
    },
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: 4
    },

];

//start game

startEl.addEventListener('click', function startGame() {
    startEl.style.display = "none"
    answersEl.style.display = "initial"
    countdown();
    reset();
    displayQuestion();
});


function displayQuestion() {
    for (var i = 0; i < questionList.length; i++) {
        // questionIndex = i;
        var currentQuestion = questionList[questionIndex].question;
        var currentChoices = questionList[questionIndex].choices
        question.innerHTML = currentQuestion;
    }
    console.log(currentQuestion)
    console.log(questionIndex)
    console.log(currentChoices)



    answer1.innerHTML = currentChoices[0]
    answer2.innerHTML = currentChoices[1]
    answer3.innerHTML = currentChoices[2]
    answer4.innerHTML = currentChoices[3]

}

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

    if(questionList[questionIndex].answer === userAnswer.innerText){
console.log("correct")
    }


}