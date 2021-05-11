/************ Price Range Object ************/

// Inexpensive
// Object literal syntax to initialize this object
let inexpensive = {
    priceMax: 'a',
    selected: null
};

// Moderate
let moderate = {
    priceMin: 'b',
    priceMax: 'c',
    selected: null
};

// Pricey
let pricey = {
    priceMin: 'd',
    priceMax: 'e',
    selected: null
};

// Ultra High-End
let ultraHighEnd = {
    priceMin: 'f',
    selected: null
};

let price = [inexpensive, moderate, pricey, ultraHighEnd];

let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    {label: '$$', tooltip: 'Modterate', minPerPerson: 11, maxPerPerson: 20},
    {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50},
]

