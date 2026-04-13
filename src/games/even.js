import runEngine from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [String(question), correctAnswer];
};

export default () => runEngine(description, generateRound);