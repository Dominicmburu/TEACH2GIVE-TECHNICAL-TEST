// Question 1: Design a function that reverses the digits of an integer. For example, 50 should become 5 and -12 should become -21.

function reverseIntegers(n) {
    const sign = n < 0 ? -1 : 1;
    i = Math.abs(n).toString().split('').reverse().join('');
    return sign * parseInt(i);
}
const test1 = reverseIntegers(73)
console.log(test1);



// Question 2: Write a recursive function to calculate the factorial of a number.

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
const test2 = factorial(4)
console.log(test2);



// Question 3: Design a function that takes a string or sequence of characters as input and returns the character that appears most frequently.
// Eg: 11189 => '1', hello => 'l'

function mostFrequentChar(s) {
    const charCount = {};
    let maxChar = '';
    let maxCount = 0;

    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
        if (charCount[char] > maxCount) {
            maxChar = char;
            maxCount = charCount[char];
        }
    }
    
    return maxChar;
}
const test3 = mostFrequentChar('TEACH2GIVE')
console.log(test3);



// Question 4: Design a function that determines whether a given string is a pangram. A pangram is a sentence or phrase containing every letter of the alphabet at least once.

function isPangram(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const normalizedStr = s.toLowerCase();
    
    for (const char of alphabet) {
        if (!normalizedStr.includes(char)) {
            return false;
        }
    }
    
    return true;
}
const test4 = isPangram("The quick brown fox jumps over the lazy dog")
console.log(test4);



// Question 5: Design a function that takes a list of integers as input. The function should return True if the list contains two consecutive threes (3 next to a 3) anywhere within the list. Otherwise, it should return False.

function hasConsecutiveThrees(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === 3 && arr[i + 1] === 3) {
            return true;
        }
    }
    return false;
}

const test5 = hasConsecutiveThrees([1, 3, 3])
const test6 = hasConsecutiveThrees([1, 3, 1, 3])
console.log(test5); 
console.log(test6);



// Question 6: Master Yoda, a renowned Jedi Master from the Star Wars universe, is known for his unique way of speaking. He often reverses the order of words in his sentences. For example, instead of saying "I am home" he might say "Home am I" Design a function that takes a sentence as input and returns a new sentence with the words reversed in the same order that Master Yoda would use.

function yodaSpeak(sentence) {
    return sentence.split(' ').reverse().join(' ');
}
const test7 = yodaSpeak("I am home")
const test8 = yodaSpeak("Hello world")
console.log(test7);
console.log(test8);



