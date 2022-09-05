function findClosestValueInBst(tree, target) {
    if(tree == null) return null;
    if(tree.value == target) return tree.value;
  
    let nextClose = findClosestValueInBst(target > tree.value ? tree.right : tree.left, target);
    
    if(nextClose == null) return tree.value;
    if(Math.abs(nextClose - target) < Math.abs(tree.value - target)) return nextClose;
    return tree.value;
}