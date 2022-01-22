(function(info){
  console.log(info);

  const myOriginal = {
    someProp: "with a string value",
    anotherProp: {
      withAnotherProp: 1,
      andAnotherProp: true
    }
  };

  /**
    * shortcomings of this method are:
    * Recursive data structures - JSON.stringify will throw with recursive
    *                            data structures like lists or trees
    * Built-in types - JSON.stringify will throw if the value contains other
    *                 JS built-ins like Map, Set, Date, RegExp or ArrayBuffer
    * Funtions - JSON.stringify will quietly ignore functions
    */
  const myDeepCopy = JSON.parse(JSON.stringify(myOriginal));

  // Changing directly on copy wouldn't reflect in the original
  myDeepCopy.aNewProp = 'a new value';
  console.log(myDeepCopy);
  console.log(myOriginal);

  // Changing copy at nested level would reflect in the original
  myDeepCopy.anotherProp.aNewProp = 'a new value';
  console.log(myDeepCopy);
  console.log(myOriginal);

})('Deep Copies in JavaScript');
