import runEngine from '../index.js'

const description = 'What is the result of the expression?'

const generateRound = () => {
 const num1 = Math.floor(Math.random() * 20) + 1
const num2 = Math.floor(Math.random() * 10) + 1
const operators = ['+', '-', '*']
const operator = operators[Math.floor(Math.random() * operators.length)]

const question = 

let result
if (operator === '+') result = num1 + num2
if (operator === '-') result = num1 - num2
if (operator === '*') result = num1 * num2

return [question, String(result)]
}

export default () => runEngine(description, generateRound)
