function countOccurence(str,ltr){
    var counter=0;
    
for(var i=0;i<str.length;i++){
    if(str[i]==ltr){
        counter++;
        }
    }
    return counter;
}
console.log(countOccurence( 'w3resource.com', 'u'))