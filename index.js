function reverse(word) {
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join("")
  return reversedWord
}


function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word)
  if (word === reversedWord) {
    return true
  } else {
    return false
  }
}


// write a function testing for a palindrome and return true if true
// and return false if not true
/*
  Add your pseudocode here
  the word should be the same word no matter which way it is written.
*/

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
