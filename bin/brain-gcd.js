#!/usr/bin/env node
import runEngine from '../src/index.js'
import getRandomInRange from '../src/utils.js'

const description = 'Find the greatest common divisor of given numbers.'

// Функция для вычисления НОД
const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b))

const generateRound = () => {
  const num1 = getRandomInRange(1, 100)
  const num2 = getRandomInRange(1, 100)
  const question = `${num1} ${num2}`
  const correctAnswer = String(getGcd(num1, num2))

  return [question, correctAnswer]
}

runEngine(description, generateRound)
