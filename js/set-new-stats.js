import templateStats from './template-stats';

const set = (session, totalPoints) => {
  const table = templateStats.querySelectorAll(`.result__table`)[session.gameType - 1];
  console.log(table);
};

export default set;
