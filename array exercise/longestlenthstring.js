function longestCountryName(arr){ 
    var country="";
    
    for(let x in arr){
        
        if(arr[x].length>country.length){
            country=arr[x];
        }
        
        
    }
    
    
    return country;
    
    
}
console.log(longestCountryName(["Australia", "Germany", "United States of America",]));