// Below is going to be the questions and answers for the quiz
const questions = [

  {
    question: "What CSS value acts as a frame around an image?",
    answers: ["Content", "Margin", "Border", "Padding"],
    rightAnswer: 2,
    },

  {
    question: "Best practice for console logs is to ____ them to prevent hacking into generator devices", 
    answers: ["Delete", "Change", "Keep", "Realign"],
    rightAnswer: 0,
    },

  {
    question: "To move a folder in git you must use",
    answers: ["rm", "mv", "pull", "mkdir"],
    rightAnswer: 1,
    },

  {
    question: "What is the base star number for an index?",
    answers: ["-1", "1", "0", "32"],
    rightAnswer: 2,

    },

  {
    question: "In JavaScript to determine if something is true or false is called a(n) ",
    answers: ["Array", "Case", "Parse", "Boolean"],
    rightAnswer: 3,
    },

  {
    question: "In JavaScript you should use local storage for all personal information",
    answers: ["True", "False"],
    rightAnswer: 0,
    },

  {
    question: "Which of these is not used to save a variable",
    answers: ["var", "let", "const", "make"],
    rightAnswer: 3,
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

playBtn.addEventListener('click', startQuiz)



console.log(playBtn)

function startQuiz () {
  playBtn.classList.setAttribute('hide')
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  showNextQuestion()
}

function render(questionIndex) {
  questionsDiv.innerHTML = "";
  ulCreate.innerHTML = "";
  for (var i = 0; i < questions.length; i++) {
    var userQuestion = questions[questionIndex].title;
    var userChoices = questions[questionIndex].choices;
    questionsDiv.textContent = userQuestion
  }
  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionsDiv.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener('click', (compare));
  })

}
