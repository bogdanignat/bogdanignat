const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')
console.log(localStorage)

finalScore.innerText = mostRecentScore

// get the value of the input(by user)
username.addEventListener('keyup', () => {
  saveScoreBtn.disabled = !username.value
})

// function for the button "save"  (saves the score)

const saveScore = document.getElementById('saveScoreBtn')
saveScore.addEventListener('click', saveHighScore)

function saveHighScore(e) {
  e.preventDefault()

  const score = {
    score: mostRecentScore,
    name: username.value,
  }

  highScores.push(score)

  highScores.sort((a, b) => {
    return b.score - a.score
  })

  highScores.splice(10)

  localStorage.setItem('highScores', JSON.stringify(highScores))
  window.location.assign('/')
}
