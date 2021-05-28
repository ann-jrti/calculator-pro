

/* side functions */
//const stringArrayToNumberString = (array) => array.Map(element => parseFloat.element());

const threeDecimals = (number) => parseFloat(number.toFixed(3));

const sumArray = array => {
    let sumOfNumbers = 0;
    for (let i = 0; i < array.length; i++) {
            sumOfNumbers += array[i];     
    }
    result.push(threeDecimals(sumOfNumbers));
    return sumOfNumbers;
}

const restArray = array => {
    let restOfNumbers = 0;
    for (let i = 0; i < array.length; i++) {
        if (i === 0){
            restOfNumbers += array[i]
        } else {
            restOfNumbers -= array[i]
        }
        
    }
    result.push(threeDecimals(restOfNumbers));
    return restOfNumbers;
}

const multiplicateArray = array => {
    let multOfNumbers = 0;
    for (let i = 0; i < array.length; i++) {
        if (i === 0){
            multOfNumbers += array[i]
        } else {
            multOfNumbers *= array[i]
        }
        
    }
    result.push(threeDecimals(multOfNumbers));
    return multOfNumbers;
}

const divideArray = array => {
    let divisionOfNumbers = 0;
    for (let i = 0; i < array.length; i++) {
        if (i === 0){
            divisionOfNumbers += array[i]
        } else {
            divisionOfNumbers /= array[i]
        }
        
    }
    result.push(threeDecimals(divisionOfNumbers));
    return divisionOfNumbers;
}

const sqroot = (num) => {
  let sqrootNum = threeDecimals(Math.sqrt(num));
  result.push(sqrootNum);
}

let numberList = [] 
let parsedList 
let result = [];

/* main function */

function calculate() {
  //requests first number
  let firstNumber = prompt('please introduce the first number');
  while (isNaN(firstNumber)) {
    window.alert('only a number please! :)');
    firstNumber = prompt('please introduce the first number');
  }
  numberList.push(firstNumber);
  console.log(`Number introduced: ${firstNumber}`);

  //asks for more numbers to introduce
  let oneMoreNumber = prompt('do you want to introduce more numbers? type \'no\' to stop introducing numbers'); //ARREGLAR PRIMER 'NO' NO CUENTA
  
  //repeat question until users types 'no'
  while (oneMoreNumber !== 'no') {
    let newNumber = prompt('introduce another number');
    while (isNaN(newNumber)) {
      window.alert('only a number please! :)');
      newNumber = prompt('introduce another number');
    }
    numberList.push(newNumber);
    console.log(`Number introduced: ${newNumber}`)
    oneMoreNumber = prompt('do you want to introduce more numbers? type \'no\' to stop introducing numbers');
  }

  //converts string array into float array
    parsedList = numberList.map(function(num) {
    return num = parseFloat(num);
  })

    if (parsedList.length === 1) {
      let firstNumberSqrt = (parsedList[0]);
      firstNumberSqrt = sqroot(firstNumberSqrt);
      result.push(firstNumberSqrt);
  
      //shows final result to user
      console.log(`The square root of ${parsedList[0]} is ${result}`);
    } else {
      sumArray(parsedList);
      restArray(parsedList);
      multiplicateArray(parsedList);
      divideArray(parsedList);

      console.log(`The sum of the numbers is: ${result[0]}.
The rest of the numbers is: ${result[1]}.
The multiplication of the numbers is: ${result[2]}.
The division of the numbers is: ${result[3]}.`);
    }
}



calculate()
