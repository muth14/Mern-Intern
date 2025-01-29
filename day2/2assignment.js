// Array of strings
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// 1. Array methods
console.log("Original array:", fruits);

// a. Add an item at the end (push)
fruits.push("fig");
console.log("After push:", fruits);

// b. Remove the first item (shift)
const removedFruit = fruits.shift();
console.log("After shift:", fruits);
console.log("Removed fruit:", removedFruit);

// c. Find index of a specific element (indexOf)
const index = fruits.indexOf("cherry");
console.log("Index of 'cherry':", index);

// d. Sort the array alphabetically
fruits.sort();
console.log("Sorted array:", fruits);

// e. Reverse the array
fruits.reverse();
console.log("Reversed array:", fruits);

// f. Filter items containing more than 5 characters
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log("Fruits with more than 5 characters:", longFruits);

// g. Map to convert all fruits to uppercase
const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercase fruits:", upperCaseFruits);

// 2. String methods
const sentence = "  JavaScript is a versatile programming language.  ";
console.log("\nOriginal sentence:", sentence);

// a. Trim spaces from the beginning and end
const trimmedSentence = sentence.trim();
console.log("Trimmed sentence:", "${trimmedSentence}");

// b. Convert to uppercase
const upperCaseSentence = trimmedSentence.toUpperCase();
console.log("Uppercase sentence:", upperCaseSentence);

// c. Replace a word
const replacedSentence = trimmedSentence.replace("versatile", "powerful");
console.log("Replaced sentence:", replacedSentence);

// d. Split into words
const words = trimmedSentence.split(" ");
console.log("Words in the sentence:", words);

// e. Check if the sentence includes a word
const includesWord = trimmedSentence.includes("JavaScript");
console.log("Does the sentence include 'JavaScript'?", includesWord);

// f. Get a substring
const substring = trimmedSentence.substring(0, 10);
console.log("Substring (first 10 characters):", substring);

// Combining Array and String methods
// Concatenate the fruits array into a single string
const fruitsString = fruits.join(", ");
console.log("\nFruits as a string:", fruitsString);

// Split the concatenated string back into an array
const splitFruits = fruitsString.split(", ");
console.log("Split back into an array:", splitFruits);