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

const description = 'What is the result of the expression?'

const generateRound = () => {
  const operators = ['+', '-', '*']
  const num1 = Math.floor(Math.random() * 20) + 1
  const num2 = Math.floor(Math.random() * 20) + 1
  const operator = operators[Math.floor(Math.random() * operators.length)]
  const question = `${num1} ${operator} ${num2}`

  let result
  if (operator === '+') result = num1 + num2
  if (operator === '-') result = num1 - num2
  if (operator === '*') result = num1 * num2

  return [question, String(result)]
}

runGame(description, generateRound)
