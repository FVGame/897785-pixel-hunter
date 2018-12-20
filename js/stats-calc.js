const calc = (answers, leaves) => {
  let points = -1;
  if (answers && typeof answers === `object` && answers.length === 10 && leaves && typeof leaves === `number`) {
    points = 0;
  }
  return points;
};

export default calc;
