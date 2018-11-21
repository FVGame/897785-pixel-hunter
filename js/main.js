'use strict';

const main = document.querySelector(`#main`);
const templates = document.querySelectorAll(`template`);

const setTemplate = (index) => {
  const getTemplate = templates[index] || false;
  if (getTemplate) {
    main.innerHTML = ``;
    main.appendChild(document.importNode(getTemplate.content, true));
  }
};