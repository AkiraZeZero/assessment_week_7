// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

const addToZero = [1, -1];
let sum = 0;

for (let i = 0; i < addToZero.length; i++) {
    sum += addToZero[i];
}
console.log(sum);

// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

let word = "jumped";

function uniqueCharacters(str) {
    // If at any time we encounter two of the same characters, return false
    for(let i = 0; i < str.length; i++) {
        for(let j = i + 1; j < str.length; j++){
            if (str[i] == str[j])
            return false;

        }
    }
    // If no duplicate characters encountered, return true
    return true;
 }
 
if (uniqueCharacters(word) == true)
    console.log(true);
else
    console.log(false);

// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”   
// Write a function to check a sentence to see if it is a pangram or not.

function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }
  console.log(isPangram("we are not having a baja blast"))
  console.log(isPangram("The quick brown fox jumps over the lazy dog."))

// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.


function findLongestWord(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
        if (word.length < arr[i].length) {
            word = arr[i];
        }
    }
    return word;
}
function findLongestWord(arr) {
    return arr.reduce((a, b) => a.length < b.length ? b : a, "");
}
console.log(findLongestWord(['I', 'am', 'not', 'having', 'a', 'baja', 'blast']));
console.log(findLongestWord(['hello', 'world', 'supercalifragilisticexpialidocious']));