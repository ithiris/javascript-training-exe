
function checkarr(chk){
var res=Array.isArray(chk);
return res
}
console.log(checkarr('william'));

function checkarry(check){

    var res=Array.isArray(check);
    return res;
}
console.log(checkarry([1,2,2,3,]));


function clone(arrA,arrB){


var arrC=arrA.concat(arrB);
return arrC;
}
console.log(clone([1,2,4,0],[1,2,[4,0]]));