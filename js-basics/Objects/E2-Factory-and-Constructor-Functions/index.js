/************ Factory and Constructor Functions ************/

// Object literal syntax to initialize this object
let address2 = {
    streets: 'a',
    city: 'b',
    zipCode: 'c'
};

// Implemented using Factory Function
// Another way to create objects. 
// Naming convention: Camel Case/Notation
function createAddress(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    };
}

let myAddress = createAddress('Lois Lane', 'Palo Alto', '94303');
console.log(myAddress);

// Implemented using Constructor Function
// Naming convention: Pascal Case/Notation
/* This */
// 1. The operator first creates an empty object;
// 2. Then it will set this to poing to this object;
// 3. Finally it will return that object from this function.
function Address(street, city, zipCode){
    this.street = street; 
    this.city = city;
    this.zipCode = zipCode;     
}

let myCanadianAdress = new Address('Blvd. de Maisonneuve O.', 'Montreal', 'H3H2N4');
console.log(myCanadianAdress);