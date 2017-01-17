/*
  1. Turn `mult(..)` into a recursive function that can
  work on as many arguments as necessary
 */

function mult(x, y, z) {
  return x * y * z;
}

mult(3, 4, 5); // 60
mult(3, 4, 5, 6); // oops!
