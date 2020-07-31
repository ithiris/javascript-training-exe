

function largeValue(arr){

    for(var i=0;i<arr.length;i++){
        if(arr[i]<arr[i+1]){
            arr[i]=arr[i+1];   
            var res=arr[i];
        }

    }
    return res;

}
console.log(largeValue([-5, -2, -6, 0, -1]))