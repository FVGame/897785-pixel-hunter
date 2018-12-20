const calc = (answers, leaves) => {
  let points = 0;
  if (answers && typeof answers === `object` && answers.length === 10 && leaves && typeof leaves === `number`) {
    const checkAnswer = () => {
      return true;
    };
    answers.forEach((answer) => {
      if (!checkAnswer(answer.answer)) {
        return;
      }
      points += 100;
      if (answer.time < 5) {
        points += 50;
      } else if (answer.time > 30) {
        points -= 50;
      }
    });
  } else {
    points = -1;
  }
  return points;
};

export default calc;
