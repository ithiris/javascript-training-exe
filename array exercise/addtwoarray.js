

function addTwoArr(arr1,arr2){
    var a=[];
    var res;
    var counter=0;
    var x=0;
    for(i=counter;i<arr1.length+1;i++){
        for(j=counter;j<arr2.length;j++){
            if(arr1[counter] ===undefined ){
                arr1[counter]=0;
           }
           
   
        res=arr1[counter]+arr2[counter];
        a.push(res);
        counter++;
        }
        }
    return a;
}
    
    
    
    console.log(addTwoArr([1,0,2,3,4],[3,5,6,7,8,13]));
