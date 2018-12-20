const controller = (leaves) => {
  let allowContinue = false;
  if (leaves > 0) {
    allowContinue = true;
  }

  return allowContinue;
};

export default controller;
