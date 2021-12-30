import { answer } from './generateAnswers.js'

document.getElementById('button').onclick = function check() {
  //get the answers from the input text cases
  var question1 = document.quiz.question1.value
  var question2 = document.quiz.question2.value
  var question3 = document.quiz.question3.value
  var question4 = document.quiz.question4.value
  var question5 = document.quiz.question5.value
  var question6 = document.quiz.question6.value
  var question7 = document.quiz.question7.value
  var question8 = document.quiz.question8.value
  var question9 = document.quiz.question9.value
  var question10 = document.quiz.question10.value

  var correct = 0

  if (question1 == answer[0]) {
    correct++
  }
  if (question2 == answer[1]) {
    correct++
  }
  if (question3 == answer[2]) {
    correct++
  }
  if (question4 == answer[3]) {
    correct++
  }
  if (question5 == answer[4]) {
    correct++
  }
  if (question6 == answer[5]) {
    correct++
  }
  if (question7 == answer[6]) {
    correct++
  }
  if (question8 == answer[7]) {
    correct++
  }
  if (question9 == answer[8]) {
    correct++
  }
  if (question10 == answer[9]) {
    correct++
  }

  // show the gif after completed the test and submited the answers

  var pictures = [
    '',
    '/images/win.gif',
    '/images/close.gif',
    '/images/lose.gif',
  ]
  var messages = [
    '',
    'Great job! NAILED IT!!',
    "That's grate, you almost got them all!",
    'You really need to do better',
  ]
  var range = 0

  if (correct <= 2) {
    range = 3
  }

  if (correct > 2 && correct < 10) {
    range = 2
  }

  if (correct == 10) {
    range = 1
  }
  //score display
  calculateScore()

  //make the after_submit vizible and hide the rest
  document.getElementById('after_submit').style.visibility = 'visible'
  document.getElementById('message').style.visibility = 'visible'
  document.getElementById('quiz').style.visibility = 'hidden'
  document.getElementById('button').style.visibility = 'hidden'
  document.getElementById('play-mess').style.visibility = 'hidden'

  document.getElementById('message').innerHTML = messages[range]
  document.getElementById('number_correct').innerHTML =
    'You got ' + correct + ' correct.'
  document.getElementById('picture').src = pictures[range]
}

//score calculate

function calculateScore() {
  const points = 100
  var question1 = document.quiz.question1.value
  var question2 = document.quiz.question2.value
  var question3 = document.quiz.question3.value
  var question4 = document.quiz.question4.value
  var question5 = document.quiz.question5.value
  var question6 = document.quiz.question6.value
  var question7 = document.quiz.question7.value
  var question8 = document.quiz.question8.value
  var question9 = document.quiz.question9.value
  var question10 = document.quiz.question10.value

  var correct = 0
  var scorePoints = 0

  if (question1 == answer[0]) {
    correct++
  }
  if (question2 == answer[1]) {
    correct++
  }
  if (question3 == answer[2]) {
    correct++
  }
  if (question4 == answer[3]) {
    correct++
  }
  if (question5 == answer[4]) {
    correct++
  }
  if (question6 == answer[5]) {
    correct++
  }
  if (question7 == answer[6]) {
    correct++
  }
  if (question8 == answer[7]) {
    correct++
  }
  if (question9 == answer[8]) {
    correct++
  }
  if (question10 == answer[9]) {
    correct++
  }

  scorePoints = correct * points
  localStorage.setItem('mostRecentScore', scorePoints)
  document.getElementById('finalScore').innerHTML = scorePoints
}
