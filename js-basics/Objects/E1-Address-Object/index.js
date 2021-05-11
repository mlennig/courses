/************ Address Object ************/
/* Instructions */
// street
// city
// zipCode
// showAddress(address): displays all properties in this object
// along with their value

const address = {
    street: 1,
    city: 'Montreal',
    zipCode: '94303'
};

// Object.entries(circle) returns each value pair as an array
function showAddress(address){
    for(let entry of Object.entries(address))
        console.log(entry);
}

// Object literal syntax to initialize this object
let address2 = {
    streets: 'a',
    city: 'b',
    zipCode: 'c'
};

function showAddress2(address){
   for(let key in address)
     console.log(key, address[key]);     
}

// Difference in the way they're displayed
showAddress(address);
showAddress2(address);
