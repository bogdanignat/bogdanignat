import { allData } from './statesAndCapitals.js'

const listArray = allData.map(function (continentMap) {
  return [continentMap.countryName, continentMap.capital]
})

let currentQuestion = {}
let availableQuestions = []

//function for random elements from array (listArray)
const chooseRandom = (arr, num = 10) => {
  const res = []
  for (let i = 0; i < num; ) {
    const random = Math.floor(Math.random() * arr.length)
    if (res.indexOf(arr[random]) !== -1) {
      continue
    }
    res.push(arr[random])
    i++
  }
  return res
}

availableQuestions = chooseRandom(listArray, 10)

//generate states
currentQuestion = availableQuestions.map(function (availableQuestions) {
  return [availableQuestions[0]]
})

let capital1 = document.getElementById('capital1')
let capital2 = document.getElementById('capital2')
let capital3 = document.getElementById('capital3')
let capital4 = document.getElementById('capital4')
let capital5 = document.getElementById('capital5')
let capital6 = document.getElementById('capital6')
let capital7 = document.getElementById('capital7')
let capital8 = document.getElementById('capital8')
let capital9 = document.getElementById('capital9')
let capital10 = document.getElementById('capital10')

capital1.innerText = `Capital of: ${currentQuestion[0]}`
capital2.innerText = `Capital of: ${currentQuestion[1]}`
capital3.innerText = `Capital of: ${currentQuestion[2]}`
capital4.innerText = `Capital of: ${currentQuestion[3]}`
capital5.innerText = `Capital of: ${currentQuestion[4]}`
capital6.innerText = `Capital of: ${currentQuestion[5]}`
capital7.innerText = `Capital of: ${currentQuestion[6]}`
capital8.innerText = `Capital of: ${currentQuestion[7]}`
capital9.innerText = `Capital of: ${currentQuestion[8]}`
capital10.innerText = `Capital of: ${currentQuestion[9]}`

export { availableQuestions }
