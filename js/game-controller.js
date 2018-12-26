import templateGame1 from './template-game-1';
import templateStats from './template-stats';
import setTemplate from './set-template';

let session;
const controller = () => {
  if (!session || session.currentGameIndex < 10) {
    session = templateGame1();
    console.log(session.userAnswers)
  } else {
    setTemplate(templateStats);
  }
};

export default controller;
