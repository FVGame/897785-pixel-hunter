const setTemplate = (template) => {
  const main = document.querySelector(`#main`);

  main.innerHTML = ``;

  return main.appendChild(template);
};

export default setTemplate;
