const setTemplate = (template) => {
  const main = document.querySelector(`#main`);

  if (!template || !main) {
    return false;
  }

  main.innerHTML = ``;
  main.appendChild(document.importNode(template.content, true));
};

export default setTemplate;