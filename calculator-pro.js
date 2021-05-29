/* side functions of the program */

//limits decimal output to 3
const threeDecimals = (number) => parseFloat(number.toFixed(3));

//calculates sum of nums of the array
const sumArray = (array) => {
  let sumOfNumbers = 0;
  for (let i = 0; i < array.length; i++) {
    sumOfNumbers += array[i];
  }
  result.push(threeDecimals(sumOfNumbers));
  return sumOfNumbers;
};

//calculates rest of nums of the array
const restArray = (array) => {
  let restOfNumbers = 0;
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      restOfNumbers += array[i];
    } else {
      restOfNumbers -= array[i];
    }
  }
  result.push(threeDecimals(restOfNumbers));
  return restOfNumbers;
};

//calculates multiplication of nums of the array
const multiplicateArray = (array) => {
  let multOfNumbers = 0;
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      multOfNumbers += array[i];
    } else {
      multOfNumbers *= array[i];
    }
  }
  result.push(threeDecimals(multOfNumbers));
  return multOfNumbers;
};

//calculates division of nums of the array
const divideArray = (array) => {
  let divisionOfNumbers = 0;
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      divisionOfNumbers += array[i];
    } else {
      divisionOfNumbers /= array[i];
    }
  }
  result.push(threeDecimals(divisionOfNumbers));
  return divisionOfNumbers;
};

//calculates square root of a number
const sqroot = (num) => {
  let sqrootNum = threeDecimals(Math.sqrt(num));
  result.push(sqrootNum);
};

//removes from the array a NaN data introduced
const removesNotANumberData = (number) => {
  if (number === ' ' || isNaN(number)) {
    numberList.pop();
    window.alert(
      `We removed "${number}" from the list because is not a number`
    );
  }
  if (number === null) {
    numberList.pop();
  }
};

//asks user if wants to make another operation
const calculateAgainQuestion = () => {
  let calculateAgain = window.confirm('Do you want to make another operation?');
  if (calculateAgain === true) {
    calculatorPro();
  } else {
    window.alert('Ok bye! :D');
  }
};

//initiates variables to save the list of numbers and the results of operations
let numberList = [];
let result = [];

/* main function of the program */
function calculatorPro() {
  let newNumber;
  do {
    newNumber = prompt('Enter a number or press cancel to stop');
    numberList.push(parseFloat(newNumber));
    if (newNumber !== null) {
      console.log(`You introduced the number "${newNumber}"`);
    }
    removesNotANumberData(newNumber);
  } while (newNumber !== null);

  console.log(numberList);

  //proceed to calculate square root if only 1 number is introduced
  if (numberList.length === 1) {
    let firstNumberSqrt = numberList[0];
    firstNumberSqrt = sqroot(firstNumberSqrt);
    result.push(firstNumberSqrt);

    // shows final result to user
    console.log(`The square root of ${numberList[0]} is ${result}`);

    //proceed to calculate sum, rest, multiplication and division of all numbers introduced
  } else {
    sumArray(numberList);
    restArray(numberList);
    multiplicateArray(numberList);
    divideArray(numberList);

    // shows final result to user
    console.log(`The sum of the numbers is: ${result[0]}.
The rest of the numbers is: ${result[1]}.
The multiplication of the numbers is: ${result[2]}.
The division of the numbers is: ${result[3]}.`);
  }

  //clear results in case user wants to make another operation
  numberList.splice(0, numberList.length);
  result.splice(0, result.length);

  //asks user if wants to operate again
  calculateAgainQuestion();
}

calculatorPro();
