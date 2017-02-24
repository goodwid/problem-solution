module.exports = function leavesAreEqual(realtree) {
  // returns false if tree is unequal, else returns value of tree
  function checkTree(tree) {
    const keys = Object.keys(tree);
    let initialValue = 'unset_value';

    for (let i = 0; i < keys.length; i++) {
      let currentNodeValue = tree[keys[i]];
      let leafType = typeof currentNodeValue;
      if (leafType !== 'object') {
        if (initialValue === 'unset_value') {
          initialValue = currentNodeValue;
        }
      } else {
        let subTree = checkTree(currentNodeValue);
        if (initialValue === 'unset_value') {
          initialValue = subTree;
        }
        return (subTree !== initialValue || subTree === false) ? false : subTree;
      }
      if (currentNodeValue !== initialValue && leafType !== 'object') return false;
    }
    return initialValue;
  }

  return !!checkTree(realtree);
};
