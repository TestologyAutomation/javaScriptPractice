function foo(arg1) {
    console.log(arg1);
}
  
/* The above function will be
   overwritten by the function 
   below, and the below function 
   will be executed for any number
   and any type of arguments */
function foo(arg1, arg2) {
    console.log(arg1, arg2);
}
  
// Driver code
foo("Geeks")