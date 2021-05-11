/************ Blog Post Object ************/
/* Instructions */
// Use object literal syntax
// title
// auther
// views
// comments
//  (author, body)
// isLive

// Object literal syntax to initialize this object
let blogPost = {
    title: 'a',
    author: 'b',
    views: '100',
    comments: {
        author: 'troll',
        body: 'abcdefghij'
    },
    isLive: false
};

// Object literal syntax to initialize this object
let blogPost2 = {
    title: 'a',
    author: 'b',
    views: '100',
    comments: [
        {author:'a', body: 'b'},
        {author:'c', body: 'd'}
    ],
    isLive: false
};

console.log(blogPost);
console.log(blogPost2);