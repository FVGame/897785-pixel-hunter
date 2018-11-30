const getElementFromHtml = (html) => {
  const div = document.createElement(`div`);
  div.innerHTML = html;

  return div.firstChild;
};

export default getElementFromHtml;
