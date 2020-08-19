class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  yellStats() {
    console.log(this.name, this.age);
  }
}

class SuperPerson extends Person {
  constructor(name, age, power) {
    super(name, age);
    this.power = power;
  }

  yellSuperStats() {
    console.log(this.name, this.age, this.power);
  }
}

const Scott = new Person("scott", 25);
Scott.yellStats();
//Scott.yellSuperStats()


const obiWanKenobi = new SuperPerson("Ben", 40, "Being a Jedi");
obiWanKenobi.yellSuperStats();
obiWanKenobi.yellStats();

obiWanKenobi.__proto__.helloThereFunc = ()=>console.log("General Kenobi");
obiWanKenobi.__proto__.helloThere = "General Kenobi";

// obiWanKenobi.helloThereFunc()
// console.log(obiWanKenobi.helloThere)
// console.log(obiWanKenobi)



function Animal(name, legs) {
  let animal = Object.create(Animal.prototype);
  animal.name = name;
  animal.legs = legs;

  animal.yell = function () {
    console.log("Rawr");
  };
  animal.jump = function () {
    console.log(`${this.name} can jump high with ${this.legs} legs`);
  };
  animal.jumpArrow = () => {
    console.log(`${this.name} can jump high with ${this.legs} legs`);
  };

  return animal;
}

const tiger = Animal("leo", 4);

// tiger.jump()
// tiger.jumpArrow()





Animal.prototype.sleep = function () {
  console.log(`${this.name} is sleepy`);
};

Animal.prototype.sleepArrow = () => {
  console.log(`${this.name} is sleepy`);
};



// tiger.sleep()
// tiger.sleepArrow()

// console.log(tiger)






//Methods to attempt after feeling comfortable!
// What is the difference between class and prototypical inheritance
// Why does the binding of `this` change when using arrow functions as methods?
// This seems pretty similar to how Reacts props works...
// Read and understand Class (Object) Oriented programming, try to make a project using only classes, use `this` as much as you can
