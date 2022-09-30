// O(2^n)
// O(n^2)
// const combinations = (elements) => {
//     if(elements.length == 0) return [[]];

//     let last = elements.pop();
//     let combinationsWithoutLast = combinations(elements)
//     let combinationsLast = [];
//     combinationsWithoutLast.forEach(com => {
//         combinationsLast.push([...com, last])
//     })
    
//     return [...combinationsWithoutLast, ...combinationsLast]
// }

let result = []
const combinationsWithK = (elements, k) => {
    if(elements.length == 0) return [[]];
    let last = elements.pop();
    let combinationsWithoutLast = combinationsWithK(elements, k)
    let combinationsLast = [];
    combinationsWithoutLast.forEach(com => {
        if(com.length == k-1){ 
            result.push([...com, last])
        }
        
        combinationsLast.push([...com, last])
    })
    
    return [...combinationsWithoutLast, ...combinationsLast]
}

combinationsWithK([1, 2, 3, 4], 3)
console.log(result)