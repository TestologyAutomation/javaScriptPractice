let rollNumbers = [  3,9,12,  15,  17, 23,   56,  78   ];

let end = rollNumbers.length-1;
let searchingItem = 99;
let isFound = false;

let mid=0;

let start=0;
         
    // Iterate while start not meets end
    while (start<=end)
    {
 
        // Find the mid index
        let mid=Math.floor((start + end)/2);
  
        // If element is present at mid, return True
        if (rollNumbers[mid] === searchingItem) 
        {
            isFound = true; 
            break;
        }
 
        // Else look in left or right half accordingly
        else if (rollNumbers[mid] < searchingItem)
             start = mid + 1;
        else if (rollNumbers[mid] > searchingItem)
             end = mid - 1;
    }
  
if(isFound==true)
{
    console.log('found it');
}
else{
    console.log('not found');
}