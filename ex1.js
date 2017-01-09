/*
1. Make a pure function `bar(..)` to
  wrap around `foo(..)`.
 */

function foo(x) {
  y++;
  z = x * y;
}

var y = 5, z;

foo(20);
z;  // 120

foo(25);
z;  // 175
