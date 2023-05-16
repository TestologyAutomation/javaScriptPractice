class Student
{
    #name= "";
    constructor(n)
    {
        this.#name= n;
    }
    getname()
    {
        console.log(this.#name);
    }
}

let stud1= new Student("nitesh");
console.log(stud1.getname());

