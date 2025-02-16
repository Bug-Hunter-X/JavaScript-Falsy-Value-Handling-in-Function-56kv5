function foo(a, b) {
  //Explicitly check for undefined or null values
  if (a === undefined || a === null || b === undefined || b === null) {
    return 0; // Handle null and undefined values
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; //Handle Non-numeric values
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo(0,2)); // Output: 2
console.log(foo(1, false)); // Output: NaN
console.log(foo(1, "")); // Output: NaN