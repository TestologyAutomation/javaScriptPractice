function IsFistValueBigger(a, b) {

    if (a > b) 
    {
        return true;
    }
    else if (a < b) {
        return false;
    }
    return "equal";
}

console.log(IsFistValueBigger(23,23));