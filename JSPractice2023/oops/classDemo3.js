//Declaring class  
class Employee  
  {  
//Initializing an object  
    constructor(id,name)  
    {  
      this.id=id;  
      this.name=name;  
    }  
//Declaring method  
    detail()  
    {  
         console.log(this.id+" "+this.name);  
    }  
  }  
//passing object to a variable   
var e1=new Employee(101,"Martin Roy");  
var e2=new Employee(102,"Duke William");  
e1.detail(); //calling method  



