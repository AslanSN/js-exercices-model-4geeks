// declaración de datos iniciales
let undefined;
const sequence = [10, 4, 8, 27.4, 500, null, undefined, 100, 25, 40, 31, 20, 17, 1890, 13, 42];
const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// --* Exercise 1 => Create a function that sorts from less to more the array "sequence" *-- \\

//cleans the sequence array from whatever is not a number

function cleanData(arr, ifFunction)
{
    filteredArray = [];

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
// console.log(bubbleSortSmallLarge(cleanData(sequence, ifInCleanData)));


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
// console.log(bubbleSortLargeSmall(cleanData(sequence, ifInCleanData)));


// --* EXERCISE 3 => Create a function that calculates the arithmetic mean of the data in the Sequence array. *-- \\


// creates a new array without zeros to cleanse the length of the array for the mean
function cleanZeros (arr)
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
function arithmeticMean(arr)
{
    let mean = 0;
    let sum = 0;

    for (let i in arr)
    {
        sum = sum + arr[i];
    }

    mean = sum / arr.length;
    return mean;
}

console.log(arithmeticMean(cleanZeros()));

// --* EXERCISE 4 => Calculate the letter of the National Identity Document (DNI) *-- \\
