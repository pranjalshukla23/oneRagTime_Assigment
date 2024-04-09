const fs = require("fs")

fs.readFile("ort_problem_input.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err)
    } else {
        //store words in array
        const wordsArr = data.split("\n")
        let numsArr = []

        //iterate over each word
        wordsArr.forEach(word => {
            let pair = ""
            const digitsInWord = []
            //iterate over each alphabet in the word
            for(let i = 0; i < word.length; i++) {
                // if it is a number 
              if(!isNaN(word[i])) {
                digitsInWord.push(word[i]) 
            }
        }
            //form the pair and store it
            if(digitsInWord.length > 0) {
                pair = digitsInWord[0] + digitsInWord[digitsInWord.length - 1]
                numsArr.push(Number(pair))
            }
        })

        //find the sum of all numbers
        const sumOfAllDigits = numsArr.reduce((acc, curr) => {
            return acc + curr
        }, 0)

        console.log("final sum is", sumOfAllDigits)
        
    }
})