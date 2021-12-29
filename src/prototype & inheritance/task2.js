(function(info){
  console.log(info);

  let head = {
    glasses: 1
  };

  let table = {
    pen: 3,
    __proto__: head
  };

  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };

  let pockets = {
    money: 2000,
    __proto__: bed
  };

  console.log(pockets.pen); // 3 - via table -> [[Prototype]]
  console.log(bed.glasses); // 1 - via head -> [[Prototype]]
})('Prototypal Inheritance: Task 2');
