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
    assert.equal(statsCalc(Array(10), 3), 0);
  });
});
