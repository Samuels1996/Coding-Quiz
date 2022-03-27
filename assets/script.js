var timeEl = document.querySelector(".time";)

// Below is just setting some base variables that will be used for the JS file
var letsPlay = document.querySelector('#button');
var currentScore = 0
var secondsLeft = 60

// Below is going to be the questions and answers for the quiz
var q1 = {
    question: "What CSS value acts as a frame around an image?",
    answers: ["Content", "Margin", "Border", "Padding"],
    rightAnswer: 2 || index #,
}

var q2 = {
    question: "Best practice for console logs is to ____ them to prevent hacking into generator devices", 
    answers: ["Delete", "Change", "Keep", "Realign"],
    rightAnswer: 0 || index #,
}

var q3 = {
    question: "To move a folder in git you must use",
    answers: ["rm", "mv", "pull", "mkdir"],
    rightAnswer: 1 || index #,
}

var q4 = {
    question: "What is the base star number for an index?",
    answers: ["-1", "1", "0", "32"],
    rightAnswer: 2 || index #,

}

var q5 = {
    question: "In JavaScript to determine if something is true or false is called a ",
    answers: ["Array", "Case", "Parse", "Boolean"],
    rightAnswer: 3 || index #,
}

function goToQuestions() {
}

function gameTimer(), 
    var countDown = setInterval(function() {
    secondsLeft --;
    timeEl.textContent = "Time left:" + secondsLeft;

        if(secondsLeft === 0 ) {
        clearInterval(countDown);
        displayScore();
        }
    
    }

function displayScore() {

}
// Below is going to add an event listener for a button click
submitButton.addEventListener('click', goToQuestions)
    submitButton
    
console.log(submitButton)