/*
  1. Write two functions, each which return a different
    number value when called
 */

function foo () {
  return 42;
}

function bar () {
  return 10;
}

/*
  2. Write an `add(..)` function that takes two numbers
    and adds them and returns the result. Call `add(..)`
    with the results of your two functions and (1) and
    print the result to the console.
 */

function add (x, y) {
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

add2(foo, bar); // 52

/*
  4. Replace your two functions from (1) with a single function that
  takes a value and returns a function back, where the returned
  function will return the value when it's called.
 */

