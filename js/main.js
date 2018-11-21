'use strict';

const main = document.querySelector(`#main`);
const templates = document.querySelectorAll(`template`);
let currentTemplateIndex = -1;
const setTemplate = (index) => {
  const getTemplate = templates[index] || false;
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
  switch (event.which) {
    case 37:goPrev();
      break;
    case 39:goNext();
      break;
  }
  console.log(currentTemplateIndex);
});