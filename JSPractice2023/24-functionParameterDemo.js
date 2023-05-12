let a = 10, b=20,c=0;
mul(23,5);
addition(a,b,45);

let k = div(24,8); /// let k =3
console.log('division= ' + k);
function mul(num1,num2)
{
    c= num1*num2;
    console.log("multiplication=" +c);
}


function addition(q,w,e)
{
    let r = q+w+e;
    console.log("add =" + r);
}

function div(a,s)
{
 let c = a/s;   // return a/s;
 return c;   
}