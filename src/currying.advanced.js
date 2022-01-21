(function (info) {
  console.log(info);

  function curry(fn) {
    let arity = fn.length;
    return function curried (...args1) {
      if(args1.length >= arity) {
        return fn.apply(this, args1);
      } else {
        return function(...args2) {
          return curried.apply(this, [...args1, ...args2]);
        }
      }
    }
  }

  function sum (a, b, c) {
    return a + b + c;
  }

  let curriedSum = curry(sum);
  console.log(curriedSum(1)(2)(3));
  console.log(curriedSum(1, 2)(3));
  console.log(curriedSum(1, 2)(3));
  console.log(curriedSum(1, 2, 3));
})('Advanced Curry');
