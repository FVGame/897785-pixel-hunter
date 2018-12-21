const timer = (time) => {
  let allowContinue = false;
  if (time >= 0 && time <= 30) {
    allowContinue = true;
  }
  return allowContinue;
};

export default timer;
