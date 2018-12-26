import templateGame1 from './template-game-1';
import templateStats from './template-stats';
import setTemplate from './set-template';
import statsCalc from './stats-calc';
import setNewStats from './set-new-stats';
import gameSession from "./game-session";

let session;
const controller = () => {
  if (!session || session.currentGameIndex < 10) {
    session = templateGame1();
  } else {
    setTemplate(templateStats);
    setNewStats(session, statsCalc(gameSession.userAnswers, gameSession.lives));
  }
};

export default controller;
