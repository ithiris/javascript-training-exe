
// string to array ==== split( " ")
// array to string === join();

let sentence= 'my name is priya';
let words   = sentence.split(" ");
console.log(words); // [ 'my', 'name', 'is', 'priya' ]
let chars= sentence.split("");
console.log(chars);
let star=words.join("*");
console.log(star); //  my*name*is*priya
let makeOneWord=words.join("");
console.log(makeOneWord); //mynameispriya
