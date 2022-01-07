(function(info){
  console.log(info);

  let animal = {
    jumps: null;
  };
  let rabbit = {
    __proto__: animal,
    jumps: true;
  };

  console.log( rabbit.jumps ); // true

  delete rabbit.jumps;

  console.log( rabbit.jumps ); // null

  delete animal.jumps;

  console.log( rabbit.jumps ); // undefined
})('Prototypal Inheritance: Task 1');
