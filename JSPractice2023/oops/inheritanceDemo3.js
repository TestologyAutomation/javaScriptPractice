class parent
{
    constructor(x,y)
    {
        this.x= x;
        this.y=y;

        this.x=20;
        this.y=30;
    }
}

class child extends parent
{
    constructor(x,y,p)
    {
        super(x,y);
        this.p= p;
        this.p= 34;
    }
}

let c1= new child();
console.log(c1.x);
console.log(c1.y);
console.log(c1.p);



