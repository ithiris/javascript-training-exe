 function noRepeatChar(str){
     
     var a=" ";
     
     for(var i=0;i<str.length;i++){
         
         if((str[i]!==str[i+1])){
             
             
             str[i]=str[i+1];
             a=str[i];
             
         }
     }
     return a;

 }
 console.log(noRepeatChar('abacddbec'));