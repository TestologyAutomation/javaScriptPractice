let a = 10, b=20,c=0;  // global variable 
  
mul();add();div();sub();

function add()
{
    c= a+b;
   
    console.log("addition=" +c);
}
function mul()
{
    c= a*b;
    console.log("multiplication=" +c);

}
function sub()
{
    c= a-b;
    console.log("substraction=" +c);
}
function div()
{
    c= a/b;
    console.log("division=" +c);
}

