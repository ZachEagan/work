// students score, total possible score
//15/20 -> You got a C (75%)
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let calculateStudentScore = function (correct, total){
    let studentScore = (correct/total) * 100
    let studentLetterGrade = 'F'
    console.log(studentScore)

    if(studentScore >= 90 && studentScore <= 100){
        studentLetterGrade = 'A'
    }
    else if(studentScore >= 80 && studentScore <= 89){
        studentLetterGrade = 'B'
    }
    else if(studentScore >= 70 && studentScore <= 79){
        studentLetterGrade = 'C'
    }
    else if(studentScore >= 60 && studentScore <= 69){
        studentLetterGrade = 'D'
    }
    else{
        studentLetterGrade = 'F'
    }

    return studentLetterGrade
}

console.log("20/20 is a letter grade of " + calculateStudentScore(20,20))