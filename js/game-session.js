import randomInt from './random-integer';
import gameData from './data-game1';

const createGames = () => {
  const gameTypes = [];
  const usedImages = new Set();
  const images = [];
  for (let typeIndex = 0; typeIndex < 10; typeIndex++) {
    gameTypes[typeIndex] = randomInt(1, 4);console.log(gameTypes[typeIndex])
    images[typeIndex] = [];
    for (let i = 0; i < gameTypes[typeIndex]; i++) {
      const newImageType = (randomInt(1, 3) === 1 ? gameData.paintings : gameData.photos);
      let newImage = ``;
      const getNewImage = () => {
        newImage = newImageType[randomInt(0, newImageType.length)];
        if (!usedImages.has(newImage)) {
          usedImages.add(newImage);
        } else {
          getNewImage();
        }
      };
      getNewImage();
      images[typeIndex][i] = newImage;
    }
  }
};

const stats = {
  username: ``,
  lives: 3,
  answers: Array(10),
  gameTypes: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1]
};

createGames();

export default stats;
