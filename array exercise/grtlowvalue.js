function grtrLowValue(arr){
    
    
       var large=Math.max(...arr);
       var scndLarge=0;
       var min=Math.min(...arr);
       var scndMin=0;
      // console.log(large);
      // console.log(min);

       for(var i=0;i<arr.length;i++){
           if(arr[i]<(large-1)){
               arr[i]=large-1;
               scndLarge=arr[i];
               
           }
           else if(arr[i]>min){
           arr[i]=min;
           scndMin=arr[i];

           }
           else {
               return null;
           }
       }
       return scndLarge;
       
    }
 
    
console.log(grtrLowValue([1,2,3,4,5]));