//Initial answer

function firstServed(takeOut, dineIn, served) {

    let takeOutIndex = 0;
    let dineInIndex = 0;

    let response = "First come, first served!"

    for (let i = 0; i < served.length; i++) {
        if (served[i] === takeOut[takeOutIndex]) {
            takeOutIndex++;
        } else if (served[i] === dineIn[dineInIndex]) {
            dineInIndex++;
        } else {
            response = "Not first come, first served...";
            break;
        }
    }

    return response;
}

// Test - fail

let takeOut = [1, 3, 5];
let dineIn = [2, 4, 6]
let served = [1, 2, 4, 6, 5, 3];

// Test - Good

let takeOut = [17, 8, 24];
let dineIn = [12, 19, 2];
let served = [17, 8, 12, 19, 24, 2];

let takeOut = [];
let dineIn = [12, 19, 2];
let served = [12, 19, 2];

// Suggested answer:

function firstServed(takeOut, dineIn, served) {
    let takeOutIndex = 0;
    let takeOutMaxIndex = takeOut.length - 1;

    let dineInIndex = 0;
    let dineInMaxIndex = dineIn.length - 1;

    for (let i = 0; i < served.length; i++) {
        if (takeOutIndex <= takeOutMaxIndex && served[i] === takeOut[takeOutIndex]) {
            takeOutIndex++;
        } else if (dineInIndex <= dineInMaxIndex && served[i] === dineIn[dineInIndex]) {
            dineInIndex++;
        } else {
            return false;
        }
    }

    if (takeOutIndex != takeOut.length || dineInIndex != dineIn.length) {
        return false;
    }

    return true;
}