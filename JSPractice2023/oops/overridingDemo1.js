//the parent class
class Person {
    greet()
     {
        console.log("Hello. I am a person.");
        };
    }
    //the child class
    class Employee extends Person {
   /* greet() 
    {
    //super.greet(); //calling parent class method via keyword 'super'
    console.log("Hello. I am an employee.");
    }*/
    }
    let per = new Person(); //parent class object
    per.greet();

    let emp = new Employee(); //child class object
     emp.greet();