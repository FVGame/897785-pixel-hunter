const calc = (answers, lives) => {
  if (!answers || typeof answers !== `object` || answers.length !== 10 || lives < 0 || typeof lives !== `number`) {
    return -1;
  }
  let points = 0;
  const validAnswers = {
    'level-0': 1,
    'level-1': 1,
    'level-2': 1,
    'level-3': 1,
    'level-4': 1,
    'level-5': 1,
    'level-6': 1,
    'level-7': 1,
    'level-8': 1,
    'level-9': 1
  };
  const pointIncrements = {
    default: 100,
    fastAnswer: 50,
    slowAnswer: -50,
    bySavedLive: 50
  };
  const time = {
    fastAnswerMinTime: 0,
    fastAnswerMaxTime: 5,
    maxAnswerTime: 30
  };
  const checkAnswer = (answer, index) => answer === validAnswers[`level-${index}`];
  answers.forEach((answer, answerIndex) => {
    if (checkAnswer(answer.answer, answerIndex)) {
      points += pointIncrements[`default`];
      if (answer.time >= time[`fastAnswerMinTime`] && answer.time <= time[`fastAnswerMaxTime`]) {
        points += pointIncrements[`fastAnswer`];
      } else if (answer.time > time[`maxAnswerTime`]) {
        points += pointIncrements[`slowAnswer`];
      }
    }
  });
  points += lives * pointIncrements[`bySavedLive`];
  return points;
};

export default calc;
