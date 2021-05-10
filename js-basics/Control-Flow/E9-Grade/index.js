// Control  Flow: Exercise 9 - Grade

const marks = [80, 80, 50];

/* Instructions */
// Average = 70
// 1-59:    F
// 60-69:   D
// 70-79:   C
// 80-89:   B
// 90-100:  A

console.log(calculateGrade3(marks));

function calculateGrade(marks){
    let sum = 0;

    for(let mark of marks) sum += mark;

    let average = sum / marks.length;

    if(average < 60) return 'F';
    else if(average > 59 && average < 70) return 'D';
    else if(average > 69 && average < 80) return 'C';
    else if(average > 79 && average < 90) return 'B';
    else return 'A';
}

function calculateGrade2(marks){
    let sum = 0;

    for(let mark of marks) sum += mark;

    let average = sum / marks.length;

    if(average < 60) return 'F';
    else if(average < 70) return 'D';
    else if(average < 80) return 'C';
    else if(average < 90) return 'B';
    else return 'A';
}

// Apply Single Responsibility Principle
function evaluateGrade(averageResult){
    if(averageResult < 60) return 'F';
    else if(averageResult < 70) return 'D';
    else if(averageResult < 80) return 'C';
    else if(averageResult < 90) return 'B';
    else return 'A';
}

function takeAverage(sum, quantity){
    return sum / quantity;
}

function calculateGrade3(marks){
    let sum = 0;

    for(let mark of marks) sum += mark;

    let average = takeAverage(sum, marks.length);

    return evaluateGrade(average);
}