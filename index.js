const fs = require("fs");

fs.readFile("ort_problem_input.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    //create an array of words
    let numbers = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];

    //store words in array
    const wordsArr = data.split("\n");
  
    let numsArr = [];

    //iterate over each word
    wordsArr.forEach((word) => {
      let pair = "";
      const digitsInWord = [];
      let tempWord = ""
      //iterate over each alphabet in the word
      for (let i = 0; i < word.length; i++) {
        // if it is a number
        if (!isNaN(word[i])) {
          digitsInWord.push(word[i]);  
        }
        tempWord += word[i];  //nkone

        numbers.forEach((num, index) => {
          if(tempWord.includes(num)) {
            digitsInWord.push(index + 1)
            tempWord = word[i]
          }
        })
      }

      //form the pair and store it
      if (digitsInWord.length > 0) {
        pair = digitsInWord[0].toString() + digitsInWord[digitsInWord.length - 1].toString();
        numsArr.push(Number(pair));
      }
    });

    //find the sum of all numbers
    const sumOfAllDigits = numsArr.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

    console.log("final sum is", sumOfAllDigits);
  }

});
