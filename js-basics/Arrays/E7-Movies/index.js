/************ Arrays: Exercise 7 - Movies ************/

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
];

// All the movies in 2018 with rating > 4
// Sort them by their rating in 
// Descending order
// Pick their title property & display it on the console: 'b' 'a'

movies.sort(function(a, b){
    if(a.rating < b.rating) return 1;
    if(a.rating > b.rating) return -1;
    return 0;
});
console.log(movies);

// a = 4.5
// b = 4
// 0.5 => a > b
// 0 => a === b

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)      // Filter array; Returns a new array
    .sort((a,b) => a.rating - b.rating)                 // Sort array in ascending order
    .reverse()                                          // Rearrange into descending order
    .map(m => m.title)                                  // Pick only their titles

console.log(titles);