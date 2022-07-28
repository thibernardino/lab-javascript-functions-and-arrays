//interacion 1 - Find the maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 === num2) {
      return "The numbers are the same!";
    } else if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
//  console.log(`The largest number is ${maxOfTwoNumbers(15,14)}.`);

//interacion 2 - Find the longest word
const words = [
    "mystery",
    "brother",
    "aviator",
    "crocodile",
    "pearl",
    "orchard",
    "crackpot",
  ];

  function findLongestWord(array) {
    let maxLength = 0;
    let word = "";
  
    for (let possibleWord = 0; possibleWord < array.length; possibleWord++) {
      if (array[possibleWord].length > maxLength) {
        maxLength = array[possibleWord].length;
        word = array[possibleWord];
      }
    }
    return word;
  }
  
//console.log(`The longest word in the array is ${findLongestWord(words)}.`);

//interacion 3 - Calculate the sum 
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers() {
  let result = 0;
  numbers.forEach((aNumberArray) => {
    result += aNumberArray;
  });
  return result;
}
//console.log( `The sum of all numbers within the array is = ${sumNumbers(numbers)}.`);

//interaction 4 - Calculate the aravage
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(myArray) {
  if (!myArray) return null;
  else return sumNumbers(myArray) / myArray.length;
}
//console.log(`The average of numbers within the array is ${averageNumbers(numbersAvg)}.`);
//interaction 4 - level 1: Array of numbers - without using validator
function averageNumbers2(mySuperCoolArray) {
  return sumNumbers(mySuperCoolArray) / mySuperCoolArray.length;
}
//console.log(
//`The average of numbers within the array without use a validator is ${averageNumbers2(numbersAvg)}`);

//interaction 4 - level 2 Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// Iteration 4 - Level 2 - V1 = Using validator and a for loop to iterate over the array and we are REUSING the avergaeNumber function to the calculation for us :)
function averageWordLength(words) {
  if (!words.length) return null;
  let wordLengths = [];
  for (let index of words) {
    wordLengths.push(index.length);
  }
  return averageNumbers(wordLengths);
}
//console.log(`El average dentro de esta funcion es un total de ${averageWordLength(wordsArr)}.`);

//interaction 5 - Unique Arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

// The indexOf() method returns the first index at which a given element 
//can be found in the array, or -1 if it is not present.

// Iteration #5: Unique arrays  - V1 - using indexOf and checking agaisnt 
//the word by implementing a conditional validation check agaisnt -1
function uniquifyArray(array) {
  let uniqueArray = [];
  array.forEach((index) => {
    if (uniqueArray.indexOf(index) === -1) {
      uniqueArray.push(index);
    }
  });
  return uniqueArray;
}
//console.log(`The new array without repetead words is ${uniquifyArray(wordsUnique)}.`);

//interaction 6 - Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

// Using Conditional
function doesWordExist(arr, word) {
  if (arr.includes(word)) {
    return true;
  } else {
    return false;
  }
}
//console.log(`This array contains this word? Check out by yourself: ${doesWordExist(wordsFind,"machine")}!`);

//interaction 7 - Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];
//Using a simple loop and then we use a conditional to check wether 
//the word is included on the array and if it is save so it can 
//be counted/takenIntoAccount in the new array that has been crated et to the name "count"
function howManyTimes(array, word) {
  let count = 0;
  for (let index of array) {
    if (index === word) count++;
  }
  return count;
}
// console.log(
// `We check if this word repeat itself ${howManyTimes(
//  wordsCount,
//  "matter"
//   )} on our search.`
// )

;
