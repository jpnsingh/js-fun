(function(info){
  console.log(info);

  class User {
    constructor(name) {
      this.name = name;
    }

    // NOTE: No comma b/w class methods. Not to be confused with object literals
    sayHi() {
      console.log(`${this.name} says Hi!!`);
    }
  }

  let user = new User('JPN Singh');
  user.sayHi();
})('Working with classes');
