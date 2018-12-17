import templateIntro from './template-intro';
import templateGreeting from './template-greeting';
import templateRules from './template-rules';
import templateGame1 from './template-game-1';
import templateGame2 from './template-game-2';
import templateGame3 from './template-game-3';
import templateStats from './template-stats';
import setTemplate from './set-template';

const intro = setTemplate(templateIntro);

intro.querySelector(`.intro__asterisk`).addEventListener(`click`, () => {
  const greeting = setTemplate(templateGreeting);

  greeting.querySelector(`.greeting__continue`).addEventListener(`click`, () => {
    const rules = setTemplate(templateRules);
    const buttonGo = rules.querySelector(`.rules__button`);

    rules.querySelector(`.rules__input`).addEventListener(`input`, (event) => {
      if (event.currentTarget.value > ``) {
        buttonGo.removeAttribute(`disabled`);
      } else {
        buttonGo.setAttribute(`disabled`, true);
      }
    });

    buttonGo.addEventListener(`click`, () => {
      const game1 = setTemplate(templateGame1);
      const inputs = game1.querySelectorAll(`.game__answer input`);
      inputs.forEach((input) => {
        input.addEventListener(`change`, () => {
          const groups = {};
          let allChanged = true;
          inputs.forEach((input) => {
            const name = input.getAttribute(`name`);
            if (!groups[name]) {
              groups[name] = input.checked;
            } else {
              groups[name] = (input.checked ? input.checked : groups[name]);
            }
          });
          for (const item in groups) {
            if (!groups[item]) {
              allChanged = false;
            }
          }
          if (allChanged) {
            const game2 = setTemplate(templateGame2);

            game2.querySelectorAll(`.game__answer input`).forEach((game2Input) => {
              game2Input.addEventListener(`change`, () => {
                const game3 = setTemplate(templateGame3);
                const game3Items = game3.querySelectorAll(`.game__option`);
                game3Items.forEach((game3Item) => {
                  game3Item.addEventListener(`click`, () => {
                    const stats = setTemplate(templateStats);
                  });
                });
              });
            });
          }
        });
      });
    });
  });
});
