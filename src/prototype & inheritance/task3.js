(function (info) {
    console.log(info);

    let animal = {
      eat() {
        this.full = true;
      }
    };

    let rabbit = {
      __proto__: animal
    };

    rabbit.eat(); // would write on rabbit
    console.log(rabbit.full);
})('Prototypal Inheritance: Task 3')
