
let rows = 3;
let columns = 5;
var x = new Array(rows);  

for (var i = 0; i < rows; i++) {
    x[i] = new Array(columns);
}

let f= 6;
for(let m = 0; m< rows ; m++)
{
    for(let n = 0; n< columns ; n++)
    {
        x[m][n]= f;
        f= f+2;
    }
}


for(let m = 0; m< rows ; m++)
{
    for(let n = 0; n< columns ; n++)
    {
        console.log(x[m][n]);
    }
}


let activities = [
    ['Work', 90],      //0
    ['Eat', 11],      //1
    ['Commute', 44],   //2
    ['Play Game', 67],  //3
    ['Sleep', 98]      //4
];

console.log(activities[2][1]);

console.log(activities[4][0]);




