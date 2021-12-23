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

    let sumVal = curriedSum(10)(22);

    console.log(sumVal);

})('Simple Curry');
