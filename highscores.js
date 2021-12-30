const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
  })
  .join('')

function deleteItem() {
  localStorage.removeItem('highScores')
  var x = localStorage.getItem('highScores')
  console.log(x)
}
