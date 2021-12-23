(function (info) {
  console.log(info);

  function curry(fn) {
    let arity = fn.length;
    return function curried (...args) {
      if(args.length >= arity) {
        return fn.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, [...args2, ...args]);
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
