(function(info){
  console.log(info);

  let promise = new Promise(function(resolve, reject) {
    console.log('In promise executor');

    setTimeout(() => resolve("done"), 1000);
  });

  promise.then((resolve) => console.log(resolve));
})('Promise | resolve');

(function(info){
  console.log(info);

  let promise = new Promise(function(resolve, reject) {
    console.log('In promise executor');

    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });

  promise
  .then((resolve) => console.log(resolve))
  .catch(error => console.log(error));
})('Promise | reject');

(function(info){
  console.log(info);

  let promise = new Promise(function(resolve, reject) {
    console.log('In promise executor');
    resolve(123);
  });

  promise.then((resolve) => console.log(resolve));
})('Promise | Immediate');
