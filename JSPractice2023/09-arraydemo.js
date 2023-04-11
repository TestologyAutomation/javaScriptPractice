
let days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

let h =0;

if(h>=1  &&  h<=5)   // this is the way to check if a number is within a range
{
   console.log("its a working day");
   console.log(days[h])
}
if(h==0 || h==6)
{
    console.log("its holiday..enjoy");
    console.log(days[h]);
}