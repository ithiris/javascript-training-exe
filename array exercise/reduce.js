 /*
 array.reduce(function(total, currentValue, currentIndex, arr),
  initialValue)


  */

 const numbers=[1,2,3,4,5];

  const sum = numbers.reduce((accumulator,current)=> {
               return accumulator + current ;
  });
console.log(sum);
