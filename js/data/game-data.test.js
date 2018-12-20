import {assert} from 'chai';
import statsCalc from '../stats-calc';
import leavesController from '../leaves-controller';
import levelsController from '../levels-controller';

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
    assert.equal(statsCalc(answers, 0), 1000);
  });
  it(`should allow fast 10 answers`, () => {
    const answers = [
      {answer: 1, time: 0},
      {answer: 1, time: 0},
      {answer: 1, time: 0},
      {answer: 1, time: 0},
      {answer: 1, time: 0},
      {answer: 1, time: 0},
      {answer: 1, time: 0},
      {answer: 1, time: 0},
      {answer: 1, time: 0},
      {answer: 1, time: 0},
    ];
    assert.equal(statsCalc(answers, 0), 1500);
  });
  it(`should allow slow 10 answers`, () => {
    const answers = [
      {answer: 1, time: 999},
      {answer: 1, time: 999},
      {answer: 1, time: 999},
      {answer: 1, time: 999},
      {answer: 1, time: 999},
      {answer: 1, time: 999},
      {answer: 1, time: 999},
      {answer: 1, time: 999},
      {answer: 1, time: 999},
      {answer: 1, time: 999},
    ];
    assert.equal(statsCalc(answers, 0), 500);
  });
  it(`should allow 3 leaves`, () => {
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
    assert.equal(statsCalc(answers, 3), 1150);
  });
});

describe(`leaves controller`, () => {
  it(`should allow leaves`, () => {
    assert.equal(leavesController(3), true);
  });
  it(`should not allow leaves`, () => {
    assert.equal(leavesController(0), false);
  });
});

describe(`game controller`, () => {
  it(`should allow `, () => {
    assert.equal(levelsController(), true);
  });
});
