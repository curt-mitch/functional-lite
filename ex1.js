/*
1. Make a pure function `bar(..)` to
  wrap around `foo(..)`.
 */

function bar(x, y) {
  var z;

  foo(x);

  return [y, z];

  function foo(x) {
    y++;
    z = x * y;
  }
}

bar(20, 5); // [6, 120]

bar(20, 5); // [6, 120]
// same returned value because `bar` is a pure function, unlike `foo`
