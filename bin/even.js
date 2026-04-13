import runEngine from '../src/index.js'
import getRandomNumber from '../utils.js'

const isEven = num => num % 2 === 0

const getRoundData = () => {
  const question = getRandomNumber(1, 100)
  const correctAnswer = isEven(question) ? 'yes' : 'no'
  return { question, correctAnswer }
}

const startGame = () => {
  console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'.')
  runEngine(getRoundData)
}

export default startGame
