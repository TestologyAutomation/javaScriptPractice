let p = "";

for(let x= 0 ; x<=4 ; x++)
{
    for(let y = 4; y<= 8-x ; y++)
    {
        p = p+ " "+ y;
    }

    p = p+"\n";
}

console.log(p);
/*

*
**
***
****
*****

*/
let pat="";

for(let u = 1; u <=5 ;u++)
{
    for(let f = 1 ; f <=u ; f++)
    {
        pat = pat +" "+'*';
    }
    pat = pat +"\n";
}
console.log(pat);