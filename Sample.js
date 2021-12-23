var print = console.log;
var arr = [1, 2, 3, 4, 5, 6];
print('A', i);
for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    print('B', i)
  }, 100 - i * 20) // 100, 80, 60, 40, 20, 0
}
print('C', i--)
setTimeout(() => {
  print('D', --i)
}, 0) // 0
new Promise(() => { console.log("Promise"); });

// 'A' undefined
// 'C' 6
// "Prommise"
// "B" 5
// "D" 4
// "B" 4
// "B" 4
// "B" 4
// "B" 4
// "B" 4

// job queue/promises, mutate/observer
// callback queue -> setTimeout, events

console.log(sum(1,2,3)())
console.log(sum(1,2,3)(4)())
console.log(sum(13)(4)(10)())

function sum(...args) {
  const allArgs = [...args];
  function inner(...remainingArgs) {
    if (remainingArgs.length === 0) {
      return allArgs.reduce((agg, curr) => agg + curr);
    }
    allArgs.push(...remainingArgs);
    return inner;
  }
  return inner;
}

//  Input box
//  user types... post the last character... after 1 sec... typed in the box display
