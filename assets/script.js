var timeEl = document.querySelector(".time");
var buttonEl = ('#button')
// Below is just setting some base variables that will be used for the JS file
var letsPlay = document.querySelector('#button');
var currentScore = 0
var secondsLeft = 75


// Below is going to be the questions and answers for the quiz
const q1 = {
    question: "What CSS value acts as a frame around an image?",
    answers: ["Content", "Margin", "Border", "Padding"],
    rightAnswer: 2,
}

const q2 = {
    question: "Best practice for console logs is to ____ them to prevent hacking into generator devices", 
    answers: ["Delete", "Change", "Keep", "Realign"],
    rightAnswer: 0,
}

const q3 = {
    question: "To move a folder in git you must use",
    answers: ["rm", "mv", "pull", "mkdir"],
    rightAnswer: 1,
}

const q4 = {
    question: "What is the base star number for an index?",
    answers: ["-1", "1", "0", "32"],
    rightAnswer: 2,

}

const q5 = {
    question: "In JavaScript to determine if something is true or false is called a(n) ",
    answers: ["Array", "Case", "Parse", "Boolean"],
    rightAnswer: 3,
}

const q6 = {
    question: "In JavaScript you should use local storage for all personal information",
    answers: ["True", "False"],
    rightAnswer: 0,
}

const q7 = {
    question: "Which of these is not used to save a variable",
    answers: ["var", "let", "const", "make"],
    rightAnswer: 3,
}

const questionList = ["q1", "q2", "q3", "q4", "q5", "q6", "q7"]

buttonEl.addEventListener("click", startGame)

function startgame() {
    showElement()
}

function gameTimer()
    var countDown = setInterval(function() {
    secondsLeft = secondsLeft --;
    timeEl.textContent = "Time left:" + secondsLeft;

        if(secondsLeft === 0 ) {
        clearInterval(countDown);
        displayScore();
        }
    
    },

function displayScore() {

}