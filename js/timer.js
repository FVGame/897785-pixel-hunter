const timer = (time) => {
  let allowContinue = false;
  if (time >= 0) {
    allowContinue = true;
  }
  return allowContinue;
};

export default timer;
