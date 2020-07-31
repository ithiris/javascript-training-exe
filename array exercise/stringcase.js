/*
function stringCase(str){
var res=str;

    var result=[];
    result=str[0].toUpperCase()+str.slice(1);

   //result=(res[i].charAt(0)).toUpperCase();
   //return result;
    

return result;

}
console.log(stringCase("hi welcome all"));
*/
function strCase(str){
var res=str.split(' ');
var arr=[];
for(var i=0;i<res.length;i++){
    var a=(res[i].charAt(0).toUpperCase()+res[i].slice(1));
    arr.push(a);
    //return arr.join(' ');
}
return arr.join(' ');
}
console.log(strCase('hi hello'));