import cli from '../cli.js';
import getRandomNumber from '../utils.js'; // Предполагаем, что у вас есть утилита для случайных чисел

const ROUNDS_COUNT = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const getDescription = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRoundData = () => {
  const question = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runGame = () => {
  cli.startGame(getDescription, generateRoundData, ROUNDS_COUNT);
};

export default runGame;