const controller = (lives) => {
  let allowContinue = false;
  if (lives > 0) {
    allowContinue = true;
  }

  return allowContinue;
};

export default controller;
