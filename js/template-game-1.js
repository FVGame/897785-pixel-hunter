import getElementFromHtml from "./get-element-from-html";
import templateGame1 from './template-game-1';
import setTemplate from './set-template';
import data from './data-game1';
import randomInt from './random-integer';

const itemsLength = randomInt(1, 4);console.log(itemsLength)
const items = {
  ONE: 1,
  TWO: 2,
  THREE: 3
};
const htmlHeader = `<header class="header">
    <button class="back">
      <span class="visually-hidden">Вернуться к началу</span>
      <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-left"></use>
      </svg>
      <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
        <use xlink:href="img/sprite.svg#logo-small"></use>
      </svg>
    </button>
    <div class="game__timer">NN</div>
    <div class="game__lives">
      <img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">
    </div>
  </header>`;
const createForm = () => {
  let additionalClasses = ``;
  let width = 0;
  let height = 0;
  switch (itemsLength) {
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
      break;
  }

  let html = `<form class="game__content ${additionalClasses}">`;
  html += `<p class="game__task">${data.taskDescriptions[`itemsLength${itemsLength}`]}</p>`;
  for (let i = 0; i < itemsLength; i++) {
    html += createGameOption(data.paintings[0], i, width, height);
  }
  html += `</form>`;
  return html;
};
const createGameOption = (src, index, width, height) => `<div class="game__option">
        <img src="${src}" alt="Option ${index}" width="${width}" height="${height}">
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="question${index}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="question${index}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>`;
const htmlStats = `<ul class="stats">
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--correct"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
    </ul>`;
const game1 = getElementFromHtml(`<div>${htmlHeader}
  <section class="game">
    ${createForm()}
    ${htmlStats}
  </section></div>`);
const addEventsGame1 = () => {
  game1.querySelectorAll(`.game__answer input`).forEach((input) => {
    input.addEventListener(`change`, () => {
      setTemplate(templateGame1);
    });
  });
};
const addEventsGame2 = () => {
  const groupsCount = 2;
  game1.querySelector(`.game__content`).addEventListener(`click`, (event) => {
    const fields = event.currentTarget.querySelectorAll(`.game__answer input`);
    if (groupsCount === Array.from(fields).filter((input) => input.checked).length) {
      setTemplate(templateGame1);
    }
  });
};
const addEventsGame3 = () => {
  game1.querySelectorAll(`.game__answer input`).forEach((item) => {
    item.addEventListener(`click`, () => {
      setTemplate(templateGame1);
    });
  });
};

switch (itemsLength) {
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

export default game1;
