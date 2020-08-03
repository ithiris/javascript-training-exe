
/* What is a closure ? 

A closure is a inner function that has access to the outer function variables
in addition to its own variables and global variables. the inner function has not access only the outer function variables , but also the outer function parameters.
you create a closure by adding a function inside  the other  function.

*/

function addTwoNumbers(firstNumber,secondNumber){

    var returnvalue = " The Result is : ";

    function add(){

        return returnvalue + ( firstNumber + secondNumber);
    }
     return add();
}

    var result = addTwoNumbers(15,25);
    console.log(result);