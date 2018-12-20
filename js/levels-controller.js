const controller = (level, lives) => {
  let allowContinue = false;
  if (level >= 0 && level < 10 && lives > 0) {
    allowContinue = true;
  }

  return allowContinue;
};

export default controller;
