import getElementFromHtml from "./get-element-from-html";
import templateGame2 from './template-game-2';
import setTemplate from './set-template';
import data from './data-game1';

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
const createForm = (itemsLength = 1) => {
  let html = `<form class="game__content ${itemsLength === 3 ?}">`;

    ${createGameOption(data.paintings[0], 1, 468, 458)}
    ${createGameOption(data.photos[0], 2, 468, 458)}
    </form>
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
// game__content--triple
const game1 = getElementFromHtml(`<div>${htmlHeader}
  <section class="game">
    <p class="game__task">${data.taskDescription}</p>
    
    ${htmlStats}
  </section></div>`);
const groupsCount = 2;
game1.querySelector(`.game__content`).addEventListener(`click`, (event) => {
  const fields = event.currentTarget.querySelectorAll(`.game__answer input`);
  if (groupsCount === Array.from(fields).filter((input) => input.checked).length) {
    setTemplate(templateGame2);
  }
});

export default game1;
