(function(text){
  console.log(text);

  function makeAdder(x) {
    function add(y) {
        return y + x;
    }
    return add;
  }

  var plusOne = makeAdder(1);
  var plusTen = makeAdder(10);

  console.log(plusOne(3));
  console.log(plusTen(3));
})('Begin with Closure');
