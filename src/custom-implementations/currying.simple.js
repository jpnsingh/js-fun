(function (info) {
    console.log(info);

    function curry(fn) {
        return function(a) {
            return function(b) {
                return fn(a, b);
            }
        }
    }

    function sum (a, b) {
        return a + b;
    }

    let curriedSum = curry(sum);
    console.log(curriedSum(10)(22));
})('Simple Curry');
