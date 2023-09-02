//hello

let number = [100,200,300,4e2,9e9]

let sum = 0e10
for(let item of number){
  return sum += item[number]
}
console.log(sum)

let obj = {
  name: "sajad",
  lastName: "ahmadnzhad",
  age: 18
}

let func = (number) => number**2

consloe.log(func(12))

let loginUser = () => true

let array = [1,2,3,4,5,6]
for(let item of array ) {
    console.log(array[item])
}

let funcArrow = (array) => {
    let sum = 0
    for(let item of array) {
        sum += item[array] + 10
    }
    return sum
}

console.log(funcArrow(array)) 

let arrow = () => true