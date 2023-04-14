let rollNumbers = [ 12, 23,  3,  56,  78,  15,  17, 9   ];

let lengthOfArray = rollNumbers.length;
let searchingItem =45;
let isFound = false;

console.log(lengthOfArray)
let index=0;
while(index < lengthOfArray)
{
 // logic//stmt
    if(rollNumbers[index] == searchingItem)
    {
        isFound=true;
        break;
    }  
    index++;
 //increment/decrement
}

if(isFound==true)
{
    console.log('found it');
}
else{
    console.log('not found');
}