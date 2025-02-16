# JavaScript Falsy Value Handling Bug

This repository demonstrates a common error in JavaScript related to handling falsy values within functions.  The `foo` function attempts to handle `null` values, but it doesn't consider other falsy values such as `0`, `false`, or empty strings. This can lead to unexpected results if the function is called with these values.

The `bug.js` file contains the buggy code, and `bugSolution.js` provides a corrected version that addresses this issue.

## Bug Description

The original function only checks for explicit `null` values.  Other falsy values might be interpreted as 0 in addition operations, leading to incorrect results, especially if 0 is a legitimate input value.