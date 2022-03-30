// Below will be variables used in the code
let time = 60;
let qI = 0;
let timeId;
// This is going to add a click into the play button
document.getElementById('play-btn').addEventListener('click',handlePlay);
// Below will handle how the screen displays when the button is clicked. 
function handlePlay() {
  document.getElementById('intro-screen').style.display = 'none';
  document.querySelector('.main').style.display = 'block';
  timeId = setInterval(handleTime, 1000);
  renderQuestions();
}
// Below is going to be the timer function
function handleTime() {
  if (time <= 0 ){
    clearInterval(timeId);
    document.getElementById('time').innerText = 0;
  }
  else {
    time--;
    document.getElementById('time').innerText = time;
  }

  if (time === 0) {
    endGame()
  }
};
// Below is going to be for the question and answer rendering
function renderQuestions() {
  if (qI < questions.length) {
    let question = questions[qI].question;
    let answers = questions[qI].answers;
    let rightAnswer = question[qI].rightAnswer;

    console.log(question,answers,rightAnswer);

    document.querySelector('.container').innerHTML = `
      <div class='questions'>
          <h2> ${ question } </h2>
          <div class='ans'></div>
      </div>
    `;
          answers.map(ans => {
            document.querySelector('.ans').innerHTML += `<button> ${ans } </button>`
          });
      
          if (userChoice === rightAnswer) {
        qI++
      }
      else {

      }
    qI++;
  }
}