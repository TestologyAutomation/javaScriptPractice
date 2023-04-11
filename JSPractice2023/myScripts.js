function getdata()
{
    let x= parseInt(document.getElementById("rowNum"));
    let y= parseInt(document.getElementById("colNum"));
    let answer = document.getElementById("table007")
                    .getElementsByTagName("tr")[x]
                    .getElementsByTagName("td")[y].innerText;
    console.log(answer);
    
    document.getElementById("myAnswer").innerHTML ='your data is = '+answer;

}