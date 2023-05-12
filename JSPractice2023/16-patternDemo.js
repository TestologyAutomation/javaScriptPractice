// print ****** using for loop


let p="";  // declar a variable to store the patter

for(let a= 1; a<=10 ; a++)
{
    p = p+ '*';   // p = "" + '*'  ==> p = *
                    // p = * + '*' ===> p = **
}

console.log(p);

//  ***
//  ***
//  ***
//  ***
//  ***


let q="";  // declar a variable to store the patter
for(let b = 1; b<=5 ;b++)
{
    for(let a= 1; a<=3 ; a++)
    {
         q = q+ '*';                    
    }
    q = q+"\n";

}

console.log(q)


let r = "train \t me \t on \n cypress \n testAutomation";
console.log(r);

let m = 0;
 for(let v=1; v<=3; v++)
 {
  for(let k = 1; k<= 5 ; k++)
  {
	m = m + k;
  }
  m = m+v;
 }
 console.log(m);


 