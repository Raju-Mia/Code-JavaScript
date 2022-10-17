class Car{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}


const myCar = new Car("Prothom alo", 2022);

console.log(myCar.name, " ",  myCar.year);



class Carr {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      var date = new Date();
      return date;
    }
  }
  
const myCarr = new Carr("Ford", 2014);

console.log("My car is " + myCarr.age() + " years old.");