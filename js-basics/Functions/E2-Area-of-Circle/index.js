//////////////////// Exercise 2 - Area of a Circle ////////////////////

/* Instructions */
// create a circle object
// circle.radius = 2; read or write
// circle.area = 20; should be read-only
// console.log(circle.area);

const circle = {
    radius: 1,
    get area(){
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area);
