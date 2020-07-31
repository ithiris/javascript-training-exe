const posts = [
    { title:'post one' ,body:'this is a post one'},
    { title:'post two', body:'this a post two'}
];
/*

function createPost(post){
    setTimeout(function(post){
        post.push(post);
    },3000);
}
function getPost(){
    setTimeout(function(){
        let output ='';

        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000)
}

createPost({title:'post three',body:'this is npost three'});
getPost();
*/
// asynchronous call back

function createPost(post,callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    },3000);
}
function getPosts(){
    setTimeout(function(){
        let output ='';

        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000)
}

createPost({title:'post three',body:'this is post three'},getPosts);
