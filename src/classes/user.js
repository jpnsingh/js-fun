(function(info){
  console.log(info);

  class User {
    constructor(name) {
      this.name = name;
    }

    sayHi() {
      console.log(`${this.name} says Hi!!`);
    }

    // NOTE: No comma b/w class methods. Not to be confused with object literals
    sayBye() {
      console.log(`${this.name} says Bye!!`);
    }
  }

  let user = new User('JPN Singh');
  user.sayHi();

  // instance is an object
  console.log(`Type of instance user is : ${typeof user}`); // object

  // class is a function
  console.log(`Type of clas User is : ${typeof User}`); // function

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
})('Working with classes | Exploring class construct');
