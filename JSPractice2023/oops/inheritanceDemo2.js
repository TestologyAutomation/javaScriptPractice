class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a car , name ' + this.carname;
    }
  }

  let  c1 = new Car("i20");
  let msg = c1.present();
  console.log(msg);


  
  class Model extends Car {

    constructor(brand, mod) {
      super(brand);  // to call parents constructor
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myCar = new Model("i20", "Hundai");
    console.log(myCar.show());



