(function(info){
  console.log(info);

  const myOriginal = {
    someProp: "with a string value",
    anotherProp: {
      withAnotherProp: 1,
      andAnotherProp: true
    }
  };

  const myShallowCopy = {...myOriginal};

  // Changing directly on copy wouldn't reflect in the original
  myShallowCopy.aNewProp = 'a new value';
  console.log(myShallowCopy);
  console.log(myOriginal);

  // Changing copy at nested level would reflect in the original
  myShallowCopy.anotherProp.aNewProp = 'a new value';
  console.log(myShallowCopy);
  console.log(myOriginal);

})('Shallow Copies in JavaScript');
