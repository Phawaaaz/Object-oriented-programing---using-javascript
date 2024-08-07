'use strict';

// constructor function

// const fawaz = new Person('FAwaz', 2002);
// console.log(fawaz);

// console.log(fawaz instanceof Person);

/**
 * How constructor work
 * 1. new {} object is created
 * 2. functon is called, this ={}
 * {} linked to prototype
 * funtion return {} automatically
 */

// Protoypes

// fawaz.calcAge();

// console.log(fawaz.__proto__);
// console.log(fawaz.__proto__ === Person.prototype);

// Person.prototype.species = 'Homo Sapien';
// console.log(fawaz.species);

// // its not a own property, because its  declared in the prototype and no in the instance
// // to check for the property we use hasOwnPrroperty

// console.log(fawaz.__proto__.__proto__);
// console.log(fawaz.__proto__.__proto__.__proto__);
// console.dir(Person.prototype.constructor);

const arr = [1, 2, 3];

Array.prototype.unique = function () {
  return [...new Set(this)];
};
arr.unique;

console.log(console.__proto__);

/**CODING CHALLANGE */
// 1 Use constructor function to implement a cars, has a make propery and speed property. the speed in the in the car is the current speed in km/hr
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const CAR1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car2.accelerate();
car2.accelerate();
car2.break();
car2.accelerate();

// ES6 classes
// class expression
// const personCl = class{

// }
const date = new Date();
const year = date.getFullYear();

// class declaration

// const jess = new Personcl('jessica Davies', 2012);
// console.log(jess);
// jess.calcAge();

const account = {
  owner: 'Fawaz',
  movement: [200, 300, 400, -500, 200, 400, -200],

  get lastest() {
    return this.movement.slice(-1).pop();
  },
  set lastest(mov) {
    this.movement.push(mov);
  },
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name}is not a full name`);
  },
  get fullName() {
    return this._fullName;
  },
};

// const walter = new Personcl('Walter WHite');
// console.log(account.lastest);
// account.lastest = 50;
// console.log(account.movement);

// console.log(jess.age);

const personProto = {
  calcAge() {
    console.log(year - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(personProto);
steven.name = 'steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === personProto);

const sarah = Object.create(personProto);
sarah.init('Sarah', 1992);
sarah.calcAge();

class carsRecreat {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUs() {
    return `${this.speed / 1.6} mi/h`;
  }
  set speedUs(speed) {
    return (this.speed = speed * 1.6);
  }
  accelerate = function () {
    this.speed += 10;
    console.log(this.speed);
  };
  break = function () {
    this.speed -= 5;
    console.log(this.speed);
  };
}

const ford = new carsRecreat('ford', 120);
ford.break();

console.log(ford.speedUs);

// Classes inherintance
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};
console.log(Person.prototype);

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
// linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`my name is ${this.firstName}, and i study ${this.course}`);
};
const mike = new Student('Akinola Fawaz', 2002, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

const Newcar = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Newcar.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is goiing at ${this.speed}Km/h with a charge of ${this.charge}%`
  );
};
Newcar.prototype.break = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const EV = function (make, speed, charge) {
  Newcar.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Newcar.prototype);
EV.prototype.chargeTo = function (chargeTo) {
  this.charge = chargeTo;
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);

tesla.accelerate();
class Personcl {
  constructor(fullName, birthYear) {
    this.firstName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(year - this.birthYear);
  }
  get age() {
    return year - this.birthYear;
  }
  static hey() {
    console.log('Hey There 👋');
  }
  introduce() {
    console.log(
      `My name is ${this.firstName} and i am studying ${this.course}`
    );
  }
}

class StudentCl extends Personcl {
  constructor(fullName, birthYear, course) {
    // Always need to happens first
    super(fullName, birthYear);
    this.course = course;
  }
}
const selim = new StudentCl('Akinola Selim', 2007, 'cyberSecurity');
console.log(selim);

// const studentProto = Object.create(PersonProto);
// const jay = Object.create(studentProto);

/**
 * Class feild is gien classes ability to have the ability that we didnt previously hae with the constructor functions. Its amkng class a conventional method
 * Types
 * Public feild
 * private field
 * public method
 * private method
 */

class AccountCl {
  // 2)Defining public field
  locale = navigator.language;
  // #movements = [];

  // 2) Private feild(Intances)
  #movements = [];
  #pin;
  constructor(owner, currwncy, pin) {
    this.owner = owner;
    this.currwncy = currwncy;

    // protected properties
    this.#pin = pin;
    // this.#movements = [];
    // this.locale = navigator.language;
  }

  //3) public method
  get movements() {
    return this.#movements;
    // return this
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  // Private method
  #approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('loan approved');
      return this;
    }
  }
}
const acc1 = new AccountCl('Akinola', 'NIR', 5555, []);
acc1.deposit(250);
acc1.withdraw(140);
console.log(AccountCl);

// chainning-method
acc1.deposit(300).deposit(500).withdraw(120).requestLoan(2300).withdraw(4000);
console.log(acc1);
