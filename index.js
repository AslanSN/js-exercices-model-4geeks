// declaración de datos iniciales
let undefined;
const sequence = [10, 4, 8, 27.4, 500, null, undefined, 100, 25, 40, 31, 20, 17, 1890, 13, 42];
const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// --* Exercise 1 => Create a function that sorts from less to more the array "sequence" *-- \\

//cleans the sequence array from whatever is not a number

function cleanData(arr, ifFunction)
{
    let filteredArray = [];

    for(let index in arr)
    {
        filteredArray.push(ifFunction(arr[index]));
    }

    return filteredArray;
}

function ifInCleanData(value)
{
    let n = 0;

    if (typeof value === 'number')
    {
        n = value;
    }

    return n;
}


//sorts the array sequence by modifying it from smallest to largest
function bubbleSortSmallLarge(arr) 
{

    for (let i in arr)
    {
        for (let j = 0; j < i; j++)
        {
            if (arr[i] < arr[j])
            {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr
}
console.log(bubbleSortSmallLarge(cleanData(sequence, ifInCleanData)));


// --* EXERCISE 2 => Create a function that sorts the array sequence from highest to lowest. *-- \\


//sorts the array sequence by modifying it from largest to smallest
function bubbleSortLargeSmall(arr) 
{
    for (let i in arr)
    {
        for (let j = 0; j < i; j++)
        {
            if (arr[i] > arr[j])
            {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}
console.log(bubbleSortLargeSmall(cleanData(sequence, ifInCleanData)));


// --* EXERCISE 3 => Create a function that calculates the arithmetic mean of the data in the Sequence array. *-- \\

// creates a new array without zeros to cleanse the length of the array for the mean
function cleanZeros ()
{
    let noZerosArray = [];

    for (let i in cleanData(sequence, ifInCleanData))
    {
        if (cleanData(sequence, ifInCleanData)[i] != 0)
        {
            noZerosArray.push(cleanData(sequence, ifInCleanData)[i]);
        }
    }

    return noZerosArray;
}

// calculates the arithmetic mean of the data in the array 
function arithmeticMean(arrF)
{
    let mean = 0;
    let sum = 0;

    for (let i in arrF)
    {
        sum = sum + arrF[i];
    }

    mean = sum / arrF.length;
    return mean;
}

console.log(arithmeticMean(cleanZeros()));


// --* EXERCISE 4 => Calculate the letter of the National Identity Document (DNI) *-- \\

let dniWrongLetter = '55555555C';
let dniCorrect = '55555555K';
let tooBigDNINumber = '100000000B';
let tooSmallDNINumber = '-10J'



/**
 * !Converter
 * @param {} string 
 * @returns array
 */ 
const toArray = (string) =>
{
  let newArr = [...string];
  return newArr;
}

/**
 * !Takes out the number of the array
 * @param {string} string 
 * @param {function} toArrayF 
 * @returns 
 */
const takeNumberArray = (string, toArrayF) =>
{
  numberArr = [];
  // console.log(toArrayF(string))

  for (let i = 0; i < toArrayF(string).length - 1; i++)
  {
    numberArr.push(toArrayF(string)[i]);
  }

  return numberArr;
}


// CONVERTS the array into String and then into a Number // ORDER: 0
/**
 * !Converter
 * ? Array => String => Number
 * @param {function} arrFun 
 * @returns 
 */
const arrayToNumber = (arrFun) =>
{
  numberString = '';

  for (let i in arrFun)
  {
    numberString = numberString + arrFun[i];
  }

  return Number(numberString);
}


//Takes out the letter of the DNI // ORDER: 1 ToArray
/**
 * !Takes out the last item of the array recieved
 * ?In this case is to take the letter of the DNI
 * @param {string} string 
 * @param {function} toArrayF 
 * @returns 
 */
const takeLetterDNI = (string, toArrayF) =>
{
  let letter = '';
  
  letter = toArrayF(string)[toArrayF(string).length - 1];
  
  return letter.toUpperCase();
}


/**
 * !Creation of variables to do a less abstract calling of the following functions
 */
//? Numbers:
const numberDNIWrongLetter = arrayToNumber(takeNumberArray(dniWrongLetter, toArray));
const numberDNICorrect =  arrayToNumber(takeNumberArray(dniCorrect, toArray));
const numberDNITooBig = arrayToNumber(takeNumberArray(tooBigDNINumber, toArray));
const numberDNITooSmall = arrayToNumber(takeNumberArray(tooSmallDNINumber, toArray));
//? Strings:
const letterDNIWrongLetter = takeLetterDNI(dniWrongLetter, toArray);
const letterDNICorrect = takeLetterDNI(dniCorrect, toArray);
const letterDNITooBig = takeLetterDNI(tooBigDNINumber, toArray);
const letterDNITooSmall = takeLetterDNI(tooSmallDNINumber, toArray);

/**
 * ! takes the item of the array that matchs the module 
 * @param {number} num 
 * @param {array} arr 
 * @returns item of the array
 */
const letterCalculation = (num, arr) => arr[num % 23];

/**
 * !Comparator
 * ? compares the letter recieved in the input and the letter result of the equation 
 * @param {number} num 
 * @param {string} letter 
 * @param {array} arr 
 * @consoles prints a successful message and an error
 */
const letterComparison = (num, letter, arr) => 
{
  if (letter === letterCalculation(num, arr))
  {
    console.log(`Your DNI number and letter is correct! YAHOOA!`);
  }
  else console.error(`This letter is not correct! Did you mean: ${letterCalculation(num, arr)}??`);
}


//FILTERS the NUMBER and returns error or correct // ORDER: 2 calls to takeNumberArray, takeLetterDNI, 
/**
 * !Filter of a number
 * @param {number} num 
 * @param {string} letter 
 * @param {array} arr 
 * @param {function} isCorrectLetterFun /////meant to work with letterComparison
 * @consoles prints 3 errors and 1 success
 */
const filter = (num, letter, arr, isCorrectLetterFun) =>
{

  if (num > 99999999)
  {
    console.error("Your number is too big!!!");
  }
  else if (num < 0)
  {
    console.error("Is your number negative??!!");
  }
  else if (num >= 0 && num <= 99999999) isCorrectLetterFun(num, letter, arr);

}

filter(numberDNIWrongLetter, letterDNIWrongLetter, letrasDNI, letterComparison);
filter(numberDNICorrect, letterDNICorrect, letrasDNI, letterComparison);
filter(numberDNITooBig, letterDNITooBig, letrasDNI, letterComparison);
filter(numberDNITooSmall, letterDNITooSmall, letrasDNI, letterComparison);
