import {assert} from 'chai';
import statsCalc from '../stats-calc';

describe(`Array`, () => {
  describe(`#indexOf()`, () => {
    it(`should return -1 when the value is not present`, () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});

describe(`stats calculator`, () => {
  it(`should not allow no data`, () => {
    assert.equal(statsCalc(), -1);
  });
  it(`should not allow incorrect typeof answers`, () => {
    assert.equal(statsCalc(123, 3), -1);
    assert.equal(statsCalc(`123`, 3), -1);
  });
  it(`should not allow < 10 answers`, () => {
    assert.equal(statsCalc([], 0), -1);
  });
  it(`should allow 10 answers`, () => {
    const answers = [
      {answer: 1},
      {answer: 1},
      {answer: 1},
      {answer: 1},
      {answer: 1},
      {answer: 1},
      {answer: 1},
      {answer: 1},
      {answer: 1},
      {answer: 1},
    ];
    assert.equal(statsCalc(answers, 3), 1000);
  });
  it(`should allow fast 10 answers`, () => {
    const answers = [
      {time: 0},
      {time: 0},
      {time: 0},
      {time: 0},
      {time: 0},
      {time: 0},
      {time: 0},
      {time: 0},
      {time: 0},
      {time: 0},
    ];
    assert.equal(statsCalc(answers, 3), 1500);
  });
  it(`should allow slow 10 answers`, () => {
    const answers = [
      {time: 999},
      {time: 999},
      {time: 999},
      {time: 999},
      {time: 999},
      {time: 999},
      {time: 999},
      {time: 999},
      {time: 999},
      {time: 999},
    ];
    assert.equal(statsCalc(answers, 3), 500);
  });
});
