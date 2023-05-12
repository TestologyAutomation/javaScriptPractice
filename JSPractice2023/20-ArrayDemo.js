let ids = [12,14,13,99];
console.log(ids[2]);

let arr = new Array(5);
console.log(arr);
console.log(arr[2]);

let w= 20;
for(let q= 0; q < arr.length; q++)
{
    arr[q] = w;
    w= w+3;
}

for(let q= 0; q < arr.length; q++)
{
    console.log(arr[q]);
}


let mydata = [ [1,3,4,6,9],
               [23,-4,44,23,1],
               [0,7,8,44,56]
            ];
// 3*5 array , 3 rows and 5 columns

console.log("outpout="+ mydata[1][2]);
let pat="";
for(let x= 0; x<3 ; x++)
{
    for(let y = 0; y< 5 ; y++)
    {
       pat = pat +" "+mydata[x][y];
    }
    pat = pat +"\n";
}

console.log(pat);











