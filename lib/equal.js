module.exports = function leavesAreEqual(tree) {
  function treeValue(tree)

  const keys = Object.keys(tree);
  let initialValue = 'unset_value';
  for (let i = 0; i < keys.length; i ++) {
    let currentNodeValue = tree[keys[i]];
    let leafType = typeof currentNodeValue;
    if (leafType === 'object') {
      if (!leavesAreEqual(currentNodeValue)) return false;
    } else if (initialValue === 'unset_value') {
      initialValue = currentNodeValue;
    }
    if (currentNodeValue !== initialValue && leafType !== 'object') return false;
  }
  return true;
};
