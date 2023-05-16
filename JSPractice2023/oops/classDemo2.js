class Car {
    constructor(name, year)
     {
      this.name = name;
      this.year = year;
      console.log("i am inside constructor");
    }

   /* claculateAge() 
    {
        const date = new Date();
        return date.getFullYear() - this.year;
      }
    */
      claculateAge(someYear)
      {
        return someYear- this.year;
      }

  }

  let  car007 = new Car();
   const myCar1 = new Car("Ford", 2014);
   const myCar2 = new Car("Audi", 2002);

   console.log(myCar1);
   console.log(myCar2);

   console.log(myCar1.year);
 
  /* let x = myCar1.claculateAge();
   console.log(x);
*/

   console.log(myCar2.claculateAge(2020));



