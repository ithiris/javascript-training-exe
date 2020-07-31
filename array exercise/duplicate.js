
let a =[1,2,5,2,1,8];
let b=[];
let len=a.length;
/*
for(var i=0;i<len;i++){
    if(b.indexOf(a[i] )=== -1){
        b.push(a[i]);
    }
    
}
*/
let temp;
a.sort();
for(let i=0;i<len;i++){
    if(a[i]!== temp){
        b.push(a[i]);
        temp=a[i];
    }    }


console.log(b);