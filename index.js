function isPalindrome(word) {
  // Write your algorithm here
  // const reverseword = reverse(word);
  // return word === reverseword;
 
const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
const wordArray =Array.from(cleanedWord)
let newArray = [];
for(let i= wordArray.length - 1; i >= 0; i--){
  newArray.push(wordArray[i])
}
const reversedString = newArray.join('')
if(reversedString === cleanedWord){
  // if they match the word is palindrome
  return true;
}else {
  // if they dont match,the word is not palindrome
  return false;
}

}
// Compare the original and reversed strings
// return cleanedWord === cleanedWord.split('').reverse().join('');
/* 
  Add your pseudocode here
*/
function reverse(word){
  return word.split("").reverse().join("");
}
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
