class Person
{
    constructor(n,a){
        this.name=n;
        this.age=a;
    }

    getdetails()
    {
        console.log(this.name);
        console.log(this.age);
    }

    static check()
    {
        console.log("i am static");
    }
}

let person1= new Person("nitesh", 40);

person1.getdetails();
Person.check();