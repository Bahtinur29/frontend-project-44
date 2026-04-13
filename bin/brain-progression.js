#!/usr/bin/env node
import readlineSync from 'readline-sync'

const runGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(description)

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = generateRound()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${name}!`)
}

const description = 'What number is missing in the progression?'

const generateRound = () => {
  const start = Math.floor(Math.random() * 10) + 1
  const step = Math.floor(Math.random() * 5) + 2
  const length = Math.floor(Math.random() * 5) + 5
  const hiddenIndex = Math.floor(Math.random() * length)
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i)
  }

  const correctAnswer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')

  return [question, correctAnswer]
}

runGame(description, generateRound)
