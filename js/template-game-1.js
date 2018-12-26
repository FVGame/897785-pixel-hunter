import getElementFromHtml from "./get-element-from-html";
import setTemplate from './set-template';
import data from './data-game1';
import gameHeader from './game-header';
import gameStats from './game-stats';
import gameSession from './game-session';
import gameController from './game-controller';

// console.log(gameSession);
const g = () => {
  const items = {
    ONE: 1,
    TWO: 2,
    THREE: 3
  };
  const createForm = () => {
    let additionalClasses = ``;
    let width = 0;
    let height = 0;
    let showLabels = true;
    switch (gameSession.gameTypes[gameSession.currentGameIndex]) {
      case items.ONE:
        additionalClasses = `game__content--wide`;
        width = 705;
        height = 455;
        break;
      case items.TWO:
        additionalClasses = ``;
        width = 468;
        height = 458;
        break;
      case items.THREE:
        additionalClasses = `game__content--triple`;
        width = 304;
        height = 455;
        showLabels = false;
        break;
    }

    let html = `<p class="game__task">${data.taskDescriptions[`itemsLength${gameSession.gameTypes[gameSession.currentGameIndex]}`]}</p>`;
    html += `<form class="game__content ${additionalClasses}">`;
    for (let i = 0; i < gameSession.gameTypes[gameSession.currentGameIndex]; i++) {
      html += createGameOption(gameSession.images[gameSession.currentGameIndex][i], i, width, height, showLabels);
    }
    html += `</form>`;
    return html;
  };
  const createGameOption = (src, index, width, height, showLabels) => `<div class="game__option">
        <img src="${src}" alt="Option ${index}" width="${width}" height="${height}">
        ${(showLabels ? addLabels(index) : ``)}
      </div>`;
  const addLabels = (index) => `<label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="question${index}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="question${index}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>`;
  let game1 = getElementFromHtml(`<div></div>`);
  game1.appendChild(gameHeader);
  const section = game1.appendChild(getElementFromHtml(`<section class="game"></section>`));
  section.innerHTML = createForm();
  section.appendChild(gameStats);
  game1.appendChild(section);

  const addEventsGame1 = () => {
    game1.querySelectorAll(`.game__answer input`).forEach((input) => {
      input.addEventListener(`change`, () => {
        setNewPage();
      });
    });
  };
  const addEventsGame2 = () => {
    const groupsCount = 2;
    game1.querySelector(`.game__content`).addEventListener(`click`, (event) => {
      const fields = event.currentTarget.querySelectorAll(`.game__answer input`);
      if (groupsCount === Array.from(fields).filter((input) => input.checked).length) {
        setNewPage();
      }
    });
  };
  const addEventsGame3 = () => {
    game1.querySelectorAll(`.game__option`).forEach((item) => {
      item.addEventListener(`click`, () => {
        setNewPage();
      });
    });
  };
  const setNewPage = () => {
    gameSession.userAnswers[gameSession.currentGameIndex] = 1;// TODO: need set true answer
    gameSession.currentGameIndex++;
    gameController();
  };

  switch (gameSession.gameTypes[gameSession.currentGameIndex]) {
    case items.ONE:
      addEventsGame1();
      break;
    case items.TWO:
      addEventsGame2();
      break;
    case items.THREE:
      addEventsGame3();
      break;
  }

  setTemplate(game1);

  return gameSession;
};

export default g;
