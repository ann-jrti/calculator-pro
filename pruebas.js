// let numberList = ['3', '4', '5', '3']

// const convert = function (array) {
//     const newNumbers = numberList.map(function(num) {
//         return num = parseInt(num);
//     })
// }


// // const stringArray2NumberString = function(array) {
// //     const newArray = array.Map(function(num) {
// //         num = parseInt(num);
        
// //     })
    
// // }

// console.log(numberList)
// console.log(newNumbers)

let arrayExample = [3, 4, 4, 4.4]
let pruebas = []

const multplicateArray = array => {
    let newArray = 0;
    for (let i = 0; i < array.length; i++) {
        if (i === 0){
            newArray += array[i]
        } else {
            newArray *= array[i]
        }
        
    }
    pruebas.push(newArray);
    return newArray;
}

const sumArray = array => {
    let newArray = 0;
    for (let i = 0; i < array.length; i++) {
            newArray += array[i];     
    }
    pruebas.push(newArray);
    return newArray;
}

const restArray = array => {
    let newArray = 0;
    for (let i = 0; i < array.length; i++) {
        if (i === 0){
            newArray += array[i]
        } else {
            newArray -= array[i]
        }
        
    }
    pruebas.push(newArray);
    return newArray;
}

const divideArray = array => {
    let newArray = 0;
    for (let i = 0; i < array.length; i++) {
        if (i === 0){
            newArray += array[i]
        } else {
            newArray /= array[i]
        }
        
    }
    pruebas.push(newArray);
    return newArray;
}


console.log(sumArray(arrayExample))
console.log(multplicateArray(arrayExample))
console.log(restArray(arrayExample))
console.log(divideArray(arrayExample))