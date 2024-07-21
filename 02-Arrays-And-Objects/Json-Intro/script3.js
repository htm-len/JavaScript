const post = {
    id: 1, 
    title: 'post title',
    body: 'This is the body', 
};

// Convert the object to a JSON string
const str = JSON.stringify(post);

// Parse the JSON string back to an object
const obj = JSON.parse(str);

console.log(obj.id); // 1

const posts = [
    { id: 1, title: 'post title 1', body: 'This is the body 1' },
    { id: 2, title: 'post title 2', body: 'This is the body 2' },
    { id: 3, title: 'post title 3', body: 'This is the body 3' },
];

const str2 = JSON.stringify(posts);

console.log(str2); // {"id":1,"title":"post title","body":"This is the body"}