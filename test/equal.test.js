const chai = require('chai');
const assert = chai.assert;
const equal = require('../lib/equal');

const test1 = {
  a: 1,
  b: 1,
};
const test2 = {
  a: 1,
  b: 2
};
const test3 = {
  a: 2,
  b: 2,
  c: {
    c1: 2,
    c2: 2
  }
};
const test4 = {
  a: 2,
  b: 2,
  c: {
    c1: 2,
    c2: 1
  }
};
const test5 = {
  a: 2,
  b: 2,
  c: {
    c1: 1,
    c2: 1
  }
};

describe('equal leaves', () => {
  describe('simple trees, two nodes', () => {
    it ('equal', () => {
      assert.isTrue(equal(test1));
    });
    it ('unequal', () => {
      assert.isNotTrue(equal(test2));
    });
  });
  describe('multi-layer trees', () => {
    it ('equal', () => {
      assert.isTrue(equal(test3));
    });
    it ('unequal', () => {
      assert.isNotTrue(equal(test4));
    });
    it ('unequal but contains equal sub-tree', () => {
      assert.isNotTrue(equal(test5));
    });
  });
});
