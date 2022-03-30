let time = 60;
let qI = 0;
let timeId;

document.getElementById('play-btn').addEventListener('click',handlePlay);

function handlePlay() {
  document.getElementById('intro-screen').style.display = 'none';
  document.querySelector('.main').style.display = 'block';
  timeId = setInterval(handleTime, 1000);
  renderQuestions();
}

function handleTime() {
  if (time <= 0 ){
    clearInterval(timeId);
    document.getElementById('time').innerText = 0;
  }
  else {
    time--;
    document.getElementById('time').innerText = time;
  }
};

function renderQuestions() {
  if (qI < questions.length) {
    let question = questions[qI].question;
    let answers = questions[qI].answers;

    console.log(question,answers);

    document.querySelector('.container').innerHTML = `
      <div class='questions'>
          <h2> ${ question } </h2>
          <div class='ans'></div>
      </div>
    `;
          answers.map(ans => {
            document.querySelector('.ans').innerHTML += `<button> ${ans } </button>`
          });
      
          if (ans === rightAnswer) {
        qI++
      }
      else {

      }
    qI++;
  }
}