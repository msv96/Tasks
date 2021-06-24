// Write a person class to hold all details.

class classTeacher {
  constructor(name,initial) {
    this.name = name;
    this.initial = initial;
  }
  register() {
    console.log(this.name,this.initial);
  }
}

const teacher = new classTeacher("Srinivasan","M");

teacher.register();

// ------------------------------------------

// using array

class array {
  constructor(element) {
    this.length = 0;
    this.data = [];
    this.pushElement = element;
    this.getElement = element;
  }
  push(element) {
    this.data[this.length] = this.pushElement;
    this.length++;
    return this.data;
  }
}

let newarray = new array('srini');

console.log(newarray.push());

// write a class to calculate uber price.

class uber {
  constructor(km) {
    this.km = km;
    this.price = ((this.km - 4) * 9) + 42;
  }
  calcPrice() {
    if(this.km<=4) {
      console.log("Charges are Rs.42");
    }
    else {
      console.log("Charges are Rs."+this.price);
    }
  }
}

const uberPrice = new uber(9);

uberPrice.calcPrice();