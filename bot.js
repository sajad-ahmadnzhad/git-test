let array = [1,2,3,4,5,6 , 10]
// for(let item of array ) {
//     console.log(array[item])
// }

let funcArrow = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) sum += array[i]
    
    for(let item of array) sum += item

    array.forEach(item => sum += item);

    array.reduce((a,b) => sum += b)
    
    array.map(item => sum += item)

    return sum
}


let result = funcArrow(array)
console.log(result);
// console.log(funcArrow(array)) // result [11 , 12 , 13 , 14, 15 , 16]

let arrow = () => false

let on = () => true
let online = () => console.log('hello')

let numbers = [1,2,4,5,6,7,8]

let data = [
    'node js',
    'react js',
    'veu js'
]

let arrayNumber = []
numbers = numbers.forEach(item => arrayNumber.push(item++))

console.log(arrayNumber);

