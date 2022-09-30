var levelOrder = function(root) {
    if(!root) return []
    
    let queue = [ [root] ]
    let result = []
    
    while(queue.length > 0) {
        let nextLevelNodes = []
        let levelNodes = queue.shift()
        let values = []
        for(let node of levelNodes) {
            values.push(node.val)
            nextLevelNodes.push(...node.children)
        }
        if(nextLevelNodes.length > 0) {
            queue.push(nextLevelNodes)
        }
        result.push(values)
    }
    
    return result;
};