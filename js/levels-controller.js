const controller = (level, lives) => {
  return level >= 0 && level < 10 && lives > 0;
};

export default controller;
