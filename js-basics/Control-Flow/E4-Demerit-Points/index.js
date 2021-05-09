// Control  Flow: Exercise 4 - Demerit Points

/* Instructions */
// Speed Limit = 70 
// 5 -> 1 point
// Use floor function Math.floor()
// > 12 points -> suspended


console.log(checkSpeed(90));

function checkSpeed(speed){
    const SPEED_LIMIT = 70;
    const KM_PER_POINT = 5;

    if(speed < SPEED_LIMIT + KM_PER_POINT){
        return 'Ok'
    }

    else{
        const points = Math.floor((speed - SPEED_LIMIT) / KM_PER_POINT);
        if(points >= 12){
            return 'License suspended';
        }
        return points;
    }
}