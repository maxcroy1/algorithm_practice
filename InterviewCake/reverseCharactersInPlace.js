// Write a function that takes an array of characters and reverses the letters in place.

function reverseInPlace(characterArray) {
    
    let leftIndex = 0;
    let rightIndex = characterArray.length - 1;

    while (leftIndex < rightIndex) {
        const temp = characterArray[leftIndex];
        characterArray[leftIndex] = characterArray[rightIndex];
        characterArray[rightIndex] = temp;

        leftIndex++;
        rightIndex--;
    }

    return characterArray;

}