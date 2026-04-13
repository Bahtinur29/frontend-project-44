import runEngine from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const getRoundData = () => {
  const number = Math.floor(Math.random() * 100) + 1
  const question = String(number)
  const isEven = number => number % 2 === 0
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return [question, correctAnswer]
}

export default () => {
  runEngine(description, getRoundData)
}
