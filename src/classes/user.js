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

  // class is a function
  console.log(typeof User); // function

  // ...or, more precisely, the constructor method
  console.log(User === User.prototype.constructor); // true

  // The methods are in User.prototype, e.g:
  console.log(User.prototype.sayHi); // the code of the sayHi method

  // there are exactly two methods in the prototype
  console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

  // class methods are not enumerable by default
  // so they won't appear if we do a for..in on objects
  for (var key in user) {
    if (user.hasOwnProperty(key)) {
      console.log(key);
    }
  }
})('Working with classes');
