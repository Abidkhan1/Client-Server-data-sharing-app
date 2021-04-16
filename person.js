class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`Helo I'm ${this.name} and my age is ${this.age}`); 
  }
}

module.exports = Person;
