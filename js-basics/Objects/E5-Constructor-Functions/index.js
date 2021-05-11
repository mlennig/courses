/************ Constructor Functions ************/
// Object literal syntax to initialize this object
let blogPost = {
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

// Aim to have functions with the fewest parameters possible
function BlogPost(title, body, author){
    this.title = title,
    this.body = body,
    this.author = author
    this.views = 0;
    this.comments = [],
    this.isLive = false
}

let post = new BlogPost('a', 'b', 'c');

console.log(post);
