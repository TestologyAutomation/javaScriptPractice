/*   1
     1 2
     1 2 3
     1 2 3 4 
*/
let pat="";   //empty string
for(let g=1 ;g<=7 ; g++)
{
    for(let h=1; h<=g; h++)
    {
        pat = pat + " "+h;
    }
    pat = pat + "\n";
}
console.log(pat);
//===============================

let patrn="";
for(let a= 4; a>=1 ; a--)
{
    for(let b=1 ; b<=a ; b++)
    {
        patrn = patrn +" "+ a;
    }
   patrn = patrn + "\n";
}
console.log(patrn);