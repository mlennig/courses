// Control  Flow: Exercise 7 - String Properties

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties2(movie);

function showProperties(obj){
    for(const [key, value] of Object.entries(movie)){
        if(typeof(value) === "string" ){
            console.log(`${key}: ${value}`);
        }
    }
}

function showProperties2(obj){
    for(let key in obj){
        if(typeof(obj[key]) === "string"){
            console.log(key + ':', obj[key]);
        }
    }
}