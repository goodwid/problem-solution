#!/usr/bin/env node

const equal = require('./lib/equal');

const tree = {
  a: 2,
  b: 2,
  c: {
    c1: 2,
    c2: 2
  }
};
console.log(equal(tree));
