var emp = class {  
    constructor(id, name) {  
      this.id = id;  
      this.username = name;  
    }  
  };  
  
  let emp1= new emp(111,"sriram")
  console.log(emp1.username); 

  emp1.username = "nitesh";

console.log(emp1.username); 


 