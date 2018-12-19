import getElementFromHtml from "./get-element-from-html";
import templateGreeting from './template-greeting';
import setTemplate from './set-template';

const intro = getElementFromHtml(`<section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>`);
intro.querySelector(`.intro__asterisk`).addEventListener(`click`, () => {
  setTemplate(templateGreeting);
});

export default intro;
