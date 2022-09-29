const permutations = (elements) => {
    if(elements.length === 0) return [[]];

    let last = elements.pop();
    let permutationsWithoutLast = permutations(elements);
    let permutationsWithLast = [];
    
    permutationsWithoutLast.forEach(perm => {
        for(let index = 0; index <= perm.length; index++) {
            const newPermWithLast = [...perm.slice(0, index), last, ...perm.slice(index, perm.length)]
            permutationsWithLast.push(newPermWithLast);
        }
    })

    return permutationsWithLast;
}

console.log(permutations(['a', 'b', 'c']))