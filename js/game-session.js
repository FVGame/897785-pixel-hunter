import randomInt from './random-integer';
import gameData from './data-game1';

const stats = {
  username: ``,
  lives: 3,
  trueAnswers: [],
  userAnswers: [],
  gameTypes: [],
  images: [],
  currentGameIndex: 0
};

const createGames = () => {
  const usedImages = new Set();
  for (let typeIndex = 0; typeIndex < 10; typeIndex++) {
    stats.gameTypes[typeIndex] = randomInt(1, 4);
    stats.images[typeIndex] = [];
    for (let i = 0; i < stats.gameTypes[typeIndex]; i++) {
      const newImageType = (randomInt(1, 3) === 1 ? gameData.paintings : gameData.photos);
      let newImage = ``;
      const getNewImage = () => {
        newImage = newImageType[randomInt(0, newImageType.length)];
        if (!usedImages.has(newImage)) {
          usedImages.add(newImage);
          stats.trueAnswers[typeIndex] = 1; // TODO: need set true answers
        } else {
          getNewImage();
        }
      };
      getNewImage();
      stats.images[typeIndex][i] = newImage;
    }
  }
};

createGames();

export default stats;
