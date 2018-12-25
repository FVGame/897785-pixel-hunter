import getElementFromHtml from "./get-element-from-html";
import templateGame1 from './template-game-1';
import setTemplate from './set-template';
import data from './data-game1';
import randomInt from './random-integer';
import gameHeader from './game-header';
import gameStats from './game-stats';;

let itemsLength = randomInt(1, 4);
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
      showLabels = false;
      break;
  }

  let html = `<p class="game__task">${data.taskDescriptions[`itemsLength${itemsLength}`]}</p>`;
  html += `<form class="game__content ${additionalClasses}">`;
  for (let i = 0; i < itemsLength; i++) {
    html += createGameOption(data.paintings[0], i, width, height, showLabels);
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
  game1.querySelectorAll(`.game__option`).forEach((item) => {
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
