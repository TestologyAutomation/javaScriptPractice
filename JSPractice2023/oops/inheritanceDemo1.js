class Emp
{
    constructor(n)
    {
        this.name = n;
    }
}

class Manager extends Emp{
    constructor(p,d)
    {
        super(p);
        this.department=d;
    }
}
 let mgr1= new Manager("nitesh", "IT");

 console.log(mgr1);
 