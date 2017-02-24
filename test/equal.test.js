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
const test6 = {
  a: {
    a1: 2,
    a2: 2
  },
  b: 2,
  c: {
    c1: 2,
    c2: {
      c21: 2
    },
    c3: 2
  }
};
const test7 = {
  a: {
    a1: 2,
    a2: 3
  },
  b: 2,
  c: {
    c1: 2,
    c2: {
      c21: 2
    },
    c3: 2
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
    it ('equal tree, sub-tree as first node', () => {
      assert.isTrue(equal(test6));
    });
    it ('unequal tree, sub-tree as first node', () => {
      assert.isNotTrue(equal(test7));
    });
  });
});
