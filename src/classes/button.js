(function(info){
  console.log(info);

  class Button {
    constructor(value) {
      this.value = value;
    }

    click() {
      console.log(this.value);
    }

    click2 = () => console.log(this.value)
  }

  let button = new Button('hello');

  setTimeout(button.click, 1000); // undefined

  // pass a wrapper function
  setTimeout(() => button.click(), 1000) // hello
  // OR bind the method to the object
  setTimeout(button.click2, 1000) // hello

})('Working with classes | The problem of "losing this" and the fix');
