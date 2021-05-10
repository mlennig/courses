// Control  Flow: Exercise 10 - Stars

showStars(10);

function showStars(rows){
    let combinedString = '';
    for(i = 0; i < rows; i++){
        let combinedString = '';
        for(j = 0; j < i + 1; j++){
            combinedString += '*'
        }
        console.log(combinedString);
    }
}