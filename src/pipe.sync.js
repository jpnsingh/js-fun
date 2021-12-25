(function(info){
  console.log(info);

  function pipe(funcs) {
    return function(initialArg) {
      let result = initialArg;
      funcs.forEach(func => result = func(result));
      return result;
    }
  }

  function double(x) {
    return 2 * x;
  }

  function square(x) {
    return x * x;
  }

  function toChar(x) {
    return String.fromCharCode(x);
  }

  const piped = pipe([double, square]);
  // const piped = pipe([double]);
  console.log(piped(4));
})('Pipe methods synchronously');
