import getElementFromHtml from './get-element-from-html';

const main = document.querySelector(`#main`);
const templates = document.querySelectorAll(`template`);
let currentTemplateIndex = -1;
const setTemplate = (index) => {
  const getTemplate = templates[index];
  if (getTemplate) {
    main.innerHTML = ``;
    main.appendChild(document.importNode(getTemplate.content, true));
  }
  currentTemplateIndex = index;
};
setTemplate(0);

const goPrev = () => {
  if (currentTemplateIndex > 0) {
    setTemplate(currentTemplateIndex - 1);
  }
};
const goNext = () => {
  if (currentTemplateIndex < templates.length) {
    setTemplate(currentTemplateIndex + 1);
  }
};

document.addEventListener(`keydown`, (event) => {
  const keyCodeLeft = 37;
  const keyCodeRight = 39;
  switch (event.which) {
    case keyCodeLeft:
      goPrev();
      break;
    case keyCodeRight:
      goNext();
      break;
  }
});

{
  const div = document.createElement(`div`);
  div.innerHTML = `<div class="arrows__wrap">
      <style>
        .arrows__wrap {
          position: absolute;
          top: 95px;
          left: 50%;
          margin-left: -56px;
        }
        .arrows__btn {
          background: none;
          border: 2px solid black;
          padding: 5px 20px;
        }
      </style>
      <button class="arrows__btn"><-</button>
      <button class="arrows__btn">-></button>
    </div>`;

  document.body.appendChild(div);

  const arrows = div.querySelectorAll(`.arrows__btn`);
  arrows[0].addEventListener(`click`, goPrev, false);
  arrows[1].addEventListener(`click`, goNext, false);
}

