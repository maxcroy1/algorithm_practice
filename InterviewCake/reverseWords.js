// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.

// When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.

//example input: 
// const message = [ 'c', 'a', 'k', 'e', ' ',
//                 'p', 'o', 'u', 'n', 'd', ' ',
//                 's', 't', 'e', 'a', 'l' ];


function reverseWords(charArray) {

    reverseCharacters(charArray, 0, charArray.length - 1);

    let currentWordStartIndex = 0;
    for (let i = 0; i <= message.length; i++) {
        if (i === charArray.length || charArray[i] === ' ') {
            reverseCharacters(charArray, currentWordStartIndex, i - 1);
            currentWordStartIndex = i + 1;
        }
    }

    function reverseCharacters(message, leftIndex, rightIndex) {
        while (leftIndex < rightIndex) {
            const temp = message[leftIndex];
            message[leftIndex] = message[rightIndex];
            message[rightIndex] = temp;
    
            leftIndex++;
            rightIndex--;
        }
    }
}