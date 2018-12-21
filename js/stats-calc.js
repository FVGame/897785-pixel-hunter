const calc = (answers, lives) => {
  if (!answers || typeof answers !== `object` || answers.length !== 10 || lives < 0 || typeof lives !== `number`) {
    return -1;
  }
  let points = 0;
  const validAnswers = {
    'LEVEL-0': 1,
    'LEVEL-1': 1,
    'LEVEL-2': 1,
    'LEVEL-3': 1,
    'LEVEL-4': 1,
    'LEVEL-5': 1,
    'LEVEL-6': 1,
    'LEVEL-7': 1,
    'LEVEL-8': 1,
    'LEVEL-9': 1
  };
  const pointIncrements = {
    DEFAULT: 100,
    FAST: 50,
    SLOW: -50,
    LIVE: 50
  };
  const time = {
    FASTMIN: 0,
    FASTMAX: 5,
    MAX: 30
  };
  const checkAnswer = (answer, index) => answer === validAnswers[`LEVEL-${index}`];
  answers.forEach((answer, answerIndex) => {
    if (checkAnswer(answer.answer, answerIndex)) {
      points += pointIncrements[`DEFAULT`];
      if (answer.time >= time[`FASTMIN`] && answer.time <= time[`FASTMAX`]) {
        points += pointIncrements[`FAST`];
      } else if (answer.time > time[`MAX`]) {
        points += pointIncrements[`SLOW`];
      }
    }
  });
  points += lives * pointIncrements[`LIVE`];
  return points;
};

export default calc;
