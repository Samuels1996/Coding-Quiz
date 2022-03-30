// Below is going to be the questions and answers for the quiz
const questions = [

  {
    question: "What CSS value acts as a frame around an image?",
    answers: ["Content", "Margin", "Border", "Padding"],
    rightAnswer: "Border",
    },

  {
    question: "Best practice for console logs is to ____ them to prevent hacking into generator devices", 
    answers: ["Delete", "Change", "Keep", "Realign"],
    rightAnswer: "Delete",
    },

  {
    question: "To move a folder in git you must use",
    answers: ["rm", "mv", "pull", "mkdir"],
    rightAnswer: "mv",
    },

  {
    question: "What is the base star number for an index?",
    answers: ["-1", "1", "0", "32"],
    rightAnswer: "0",

    },

  {
    question: "In JavaScript to determine if something is true or false is called a(n) ",
    answers: ["Array", "Case", "Parse", "Boolean"],
    rightAnswer: "Boolean",
    },

  {
    question: "In JavaScript you should use local storage for all personal information",
    answers: ["True", "False"],
    rightAnswer: "False",
    },

  {
    question: "Which of these is not used to save a variable",
    answers: ["var", "let", "const", "make"],
    rightAnswer: "make",
    }
];

// Below is just setting some base variables that will be used for the JS file
var timeEl = document.getElementById("time");
var playBtn = document.getElementById("play-btn");
var questionContainerElement = document.getElementById("question-container");
var questionsEl = document.getElementById("questions")
let shuffledQuestions
var currentScore = 0;
var secondsLeft = 75;
var questionList = 0;
var penalty = 10;
var classList = classList;

playBtn.addEventListener('click', function() {
  playBtn.setAttribute('class','hide')
  currentQuestionIndex = 0
  questionContainerElement.remove('class', 'hide')
  showNextQuestion()}
)

console.log(playBtn)

function startQuiz () {


timeRanges.addEventListener('click', function(){
  if (holdInterval === 0) {
    holdInterval = setInterval(function(){
      secondsLeft--;
      currentTime.textContent = "Time Left:" + secondsLeft;

      if (secondsLeft <=0 ) {
        clearInterval(holdInterval);
        gameOver();
        currentTime.textContent = "Game Over!";

      }
    }, 1000);
  
  render(questionIndex);
  }
})