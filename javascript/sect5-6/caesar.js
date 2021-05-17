incrementAmount = 27

let incrementLetters = function(str, increment){
    outStr = ""
    for(let i = 0; i< str.length; i++){
        currentCharCode = str.charCodeAt(i)
        // Get actual increment for large values like 250 that overflow
        adjustedIncrement = increment % 26
        // if input char is lowercase and ends up with number after z; know that it was lowercase
        if(currentCharCode + adjustedIncrement > 122){
            outStr = outStr + String.fromCharCode((currentCharCode + adjustedIncrement) - 26)
        }
        // Capital letters that increment past Z to loop back
        else if(currentCharCode + adjustedIncrement > 90 && currentCharCode >= 65 &&currentCharCode <= 90){
            outStr = outStr + String.fromCharCode((currentCharCode + adjustedIncrement) - 26)
        }
        // If its a english letter, increment it
        else if ((currentCharCode >= 65 && currentCharCode <= 90) || (currentCharCode >= 97 &&currentCharCode <= 122)){
            outStr = outStr + String.fromCharCode(currentCharCode + adjustedIncrement)
        }
        // Any other character is output as is
        else{
            outStr = outStr + String.fromCharCode(currentCharCode)
        }
    }
    return outStr
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`plaintext: `, name => {
  console.log(`ciphertext: ${incrementLetters(name, incrementAmount)}`)
  readline.close()
})