/** Notes on Objects **/

//////////////////////////// Basics ////////////////////////////
// Object-oriented Programming (OOP)
// Group related variables
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function(){           // Method
        console.log('draw');
    }
};

circle.draw();