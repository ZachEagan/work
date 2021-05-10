let cardNumber = 5555555555554444


let verifyCard = function(card){
    let cardNumberArr = Array.from(String(card), Number)
    let reverseCardNumberArr = cardNumberArr.reverse()

    //Verify card
    let totalSum = 0
    let multSum = 0
    for(var i = 0; i < reverseCardNumberArr.length; i++){
        // Starting with second to last number ie i is odd
        if(i % 2 == 1){
            // Separate two digits before adding multiplied sum is greater than 10; need to add last digit and 1 (2*9=18 is the greatest possible result of a multiplication)
            if(reverseCardNumberArr[i] * 2 > 10){
                multSum = multSum + (reverseCardNumberArr[i] * 2)%10 + 1
            }
            else{
                multSum = multSum + (reverseCardNumberArr[i] * 2)
            }
        }
        else{
            totalSum = reverseCardNumberArr[i] + totalSum
        }
    }
    totalSum = totalSum + multSum
    console.log(totalSum)
    if(totalSum%10 == 0){
        return true
    }
    else{
        return false
    }
}

let determineCardType = function(card){
    let cardNumberArr = Array.from(String(card), Number)
    let cardType = "none"
    console.log(cardNumberArr.length + " " + cardNumberArr[0] + " " + cardNumberArr[1])

    //AMEX
    if(cardNumberArr.length == 15 && cardNumberArr[0] == 3 && (cardNumberArr[1] == 4 || cardNumberArr[1] == 7)){
        cardType = "American Express"
    }
    //VISA
    else if((cardNumberArr.length == 13 || cardNumberArr.length == 16) && cardNumberArr[0] == 4){
        cardType = "VISA"
    }
    // MasterCard
    else if(cardNumberArr.length == 16 && cardNumberArr[0] == 5 && (cardNumberArr[1] >= 1 || cardNumberArr[1] <= 5)){
        cardType = "Mastercard"
    }

    return cardType
}

if(verifyCard(cardNumber)){
    console.log(cardNumber + " is a valid number")
}
else{
    console.log(cardNumber + " is not a valid number")
}

console.log("Your card is " + determineCardType(cardNumber))