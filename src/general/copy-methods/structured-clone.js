(function(info){
  console.log(info);

  // https://web.dev/structured-clone/
  // https://developer.mozilla.org/en-US/docs/Web/API/structuredClone

  // Features & Limitations:
  /*
  Features: It can handle cyclic data structures and many built-in data types

  Limitations:

  Prototypes: If you use structuredClone() with a class instance,
              you’ll get a plain object as the return value,
              as structured cloning discards the object’s prototype chain.
  Functions: If your object contains functions, they will be quietly discarded.
  Non-cloneables: Some values are not structured cloneable,
                  most notably Error and DOM nodes.
                  It will cause structuredClone() to throw.
  */
})('Structured Clone | New way of Deep Copying');
