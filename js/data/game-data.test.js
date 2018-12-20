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
    assert.equal(statsCalc(), false);
  });
  it(`should allow data`, () => {
    assert.equal(statsCalc([], 0), 0);
  });
});
