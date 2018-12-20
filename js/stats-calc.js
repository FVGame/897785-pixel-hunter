const calc = (answers, leaves) => {
  let points = 0;
  if (answers && typeof answers === `object` && answers.length === 10 && leaves >= 0 && typeof leaves === `number`) {
    const validAnswers = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const checkAnswer = (answer, index) => answer === validAnswers[index];
    answers.forEach((answer, answerIndex) => {
      if (checkAnswer(answer.answer, answerIndex)) {
        points += 100;
        if (answer.time < 5) {
          points += 50;
        } else if (answer.time > 30) {
          points -= 50;
        }
      }
    });

    points += leaves * 50;
  } else {
    points = -1;
  }
  return points;
};

export default calc;
