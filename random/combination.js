const combinations = (elements) => {
    if(elements.length == 0) return [[]];

    let last = elements.pop();
    let combinationsWithoutLast = combinations(elements)
    let combinationsLast = [];
    combinationsWithoutLast.forEach(com => {
        combinationsLast.push([...com, last])
    })
    
    return [...combinationsWithoutLast, ...combinationsLast]
}

console.log(combinations(['a', 'b', 'c']))

// O(2^n)
// O(n^2)