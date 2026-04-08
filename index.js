import readlineSync from 'readline-sync';

const roundsCount = 3;

const runEngine = () => {
  console.log('Добро пожаловать в игру!');

  const playerName = readlineSync.question('Как вас зовут? ');
  // В JS для вставки переменной используются обратные кавычки ``
  console.log(`Привет, ${playerName}!`); 

  let score = 0;

  for (let i = 0; i < roundsCount; i += 1) {
    const question = `Вопрос ${i + 1}: Сколько будет ${i + 1} + ${i + 1}? `;
    // Преобразуем результат вычисления в строку для сравнения
    const correctAnswer = String((i + 1) + (i + 1));
    
    const playerAnswer = readlineSync.question(question);

    if (playerAnswer === correctAnswer) {
      console.log('Правильно!');
      score += 1;
    } else {
      // Исправлена кавычка и синтаксис вывода
      console.log(`Неправильно! Правильный ответ: ${correctAnswer}`); 
    }
  }

  console.log(`Игра окончена, ${playerName}. Ваш счет: ${score}/${roundsCount}`);
};

runEngine();