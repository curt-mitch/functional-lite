/*
  1. Write two functions, each which return a different
    number value when called
 */

/*
  2. Write an `add(..)` function that takes two numbers
    and adds them and returns the result. Call `add(..)`
    with the results of your two functions and (1) and
    print the result to the console.
 */

function add(x, y) {
  return x + y;
}

/*
  3. Write an `add2(..)` that takes two functions
    instead of two numbers, and it calls those two
    functions and then sends those values to `add(..)`,
    just like you did in (2) above.
 */

function add2(fn1, fn2) {
  return add(fn1(), fn2());
}

add2(foo(10), foo(42)); // 52

/*
  4. Replace your two functions from (1) with a single function that
  takes a value and returns a function back, where the returned
  function will return the value when it's called.
 */

function foo(x) {
  return function (){
    return x;
  };
}

/*
  5. Write an `addn(..)` that can take an array of 2 or more values, and
  using only `add2(..)`, adds them together. Try it with a loop. Try it
  without a loop (recursion). Try it with built-in array functional helpers (
  may/reduce).
 */

function addn(arr) {
  if (arr.length <= 2) {
    return add2(foo(arr[0]), foo(arr[1]));
  }
  return addn(
    [function() {
      return add2(arr[0], arr[1]);
    }]
    .concat(arr.slice(2))
  );
}

addn(10, 42, 56, 73);
