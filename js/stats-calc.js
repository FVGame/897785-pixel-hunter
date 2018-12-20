const calc = (answers, lives) => {
  if (!answers || typeof answers !== `object` || answers.length !== 10 || lives < 0 || typeof lives !== `number`) {
    return -1;
  }
  let points = 0;
  const validAnswers = new Map();
  validAnswers.set(`level-0`, 1);
  validAnswers.set(`level-1`, 1);
  validAnswers.set(`level-2`, 1);
  validAnswers.set(`level-3`, 1);
  validAnswers.set(`level-4`, 1);
  validAnswers.set(`level-5`, 1);
  validAnswers.set(`level-6`, 1);
  validAnswers.set(`level-7`, 1);
  validAnswers.set(`level-8`, 1);
  validAnswers.set(`level-9`, 1);
  const pointIncrements = new Map();
  pointIncrements.set(`default`, 100);
  pointIncrements.set(`fastAnswer`, 50);
  pointIncrements.set(`slowAnswer`, -50);
  pointIncrements.set(`bySavedLive`, 50);
  const time = new Map();
  time.set(`fastAnswerMinTime`, 0);
  time.set(`fastAnswerMaxTime`, 5);
  time.set(`maxAnswerTime`, 30);
  const checkAnswer = (answer, index) => answer === validAnswers.get(`level-${index}`);
  answers.forEach((answer, answerIndex) => {
    if (checkAnswer(answer.answer, answerIndex)) {
      points += pointIncrements.get(`default`);
      if (answer.time >= time.get(`fastAnswerMinTime`) && answer.time <= time.get(`fastAnswerMaxTime`)) {
        points += pointIncrements.get(`fastAnswer`);
      } else if (answer.time > time.get(`maxAnswerTime`)) {
        points += pointIncrements.get(`slowAnswer`);
      }
    }
  });
  points += lives * pointIncrements.get(`bySavedLive`);
  return points;
};

export default calc;
