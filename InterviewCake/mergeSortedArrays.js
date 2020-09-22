// In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.
// Each order is represented by an "order id" (an integer).
// We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

// Example Input && Output
// const myArray = [3, 4, 6, 10, 11, 15];
// const alicesArray = [1, 5, 8, 12, 14, 19];

// console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

function mergeArrays(arrayA, arrayB) {
    let newArray = [];
    let indexA = 0;
    let indexB = 0;

    while(indexA < arrayA.length || indexB < arrayB.length) {
        if (arrayA[indexA] <= arrayB[indexB]) {
            newArray.push(arrayA[indexA]);
            indexA++;
        } else {
            newArray.push(arrayB[indexB]);
            indexB++;
        }
    }

    return newArray;
}

// Why this doesn't work:
// This is close, but loses sight of one key factor: What if the length of the two arrays is different? 
// Using the code above, if the arrays are the same length, or array B is larger, then this will work as expected.
// However, if arrayA is longer than arrayB, we enter a feedback loop and our program crashes.
// The correct solution would be to update our conditional to be something closer to this:

function mergeArrays(arrayA, arrayB) {
    let newArray = [];
    let indexA = 0;
    let indexB = 0;

    while (newArray.length < (arrayA.length + arrayB.length)) {
        if (arrayA[indexA] <= arrayB[indexB]) {
            newArray.push(arrayA[indexA]);
            indexA++;
        } else {
            newArray.push(arrayB[indexB]);
            indexB++;
        }
    }

    return newArray;
}

// But wait, there's another issue. If arrayB is shorter than arrayA, "undefined" will be added to the array since a value can't be less than undefined (that comparison will return false)
// To fix this, let's update our algorithm to see if the arrays are exhausted

function mergeArrays(arrayA, arrayB) {
    let newArray = [];
    let indexA = 0;
    let indexB = 0;

    while (newArray.length < (arrayA.length + arrayB.length)) {
        const isArrayAExhausted = arrayA.length <= indexA;
        const isArrayBExhausted = arrayB.length <= indexB;

        if (!isArrayAExhausted && (isArrayBExhausted || arrayA[indexA] < arrayB[indexB])) {
            newArray.push(arrayA[indexA]);
            indexA++;
        } else {
            newArray.push(arrayB[indexB]);
            indexB++;
        }
    }

    return newArray;
}
