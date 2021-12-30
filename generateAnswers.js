import { availableQuestions } from './generateQuestions.js'

const answer = availableQuestions.map(function (availableQuestions) {
  return [availableQuestions[1]]
})

export { answer }
