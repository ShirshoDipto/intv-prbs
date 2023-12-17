// --------------- #1 a to the power b ------------------
function power(a, b) {
  if (b === 0) return 1;
  if (a === 0) return 0;
  return a * power(a, b - 1);
}

// console.log(power(3, 0));
// console.log(power(0, 3));
// console.log(power(0, 0));

// ---------------------- #2 Factorial-----------------------------
function factorial(a) {
  if (a === 0) return 1;
  return a * factorial(a - 1);
}

// console.log(factorial(0));
// console.log(factorial(2));
// console.log(factorial(5));

/** ------------------- #2 Reverse String (Options 1) --------------------------- */
function reverseString(str, tabs = "  ") {
  // console.log(`${tabs}reverseString(${str})`);
  if (str.length === 0) return str;
  const lastStr = str[str.length - 1];
  const newStr = str.slice(0, str.length - 1);
  return lastStr + reverseString(newStr, tabs + "  ");
}

// console.log(reverseString("stressed"));
// console.log(reverseString(""));
// console.log(reverseString("level"));
// console.log(reverseString("recursion"));
// console.log(reverseString("back"));
// console.log(reverseString("d"));

/** ------------------------- Reverse String (Options 2) -------------------- */
// function reverseString(str, tabs = "  ") {
//   // console.log(`${tabs}reverseString(${str})`);
//   if (str.length === 0) return str;
//   const firstStr = str[0];
//   const newStr = str.slice(1, str.length);
//   return reverseString(newStr, tabs + "  ") + firstStr;
// }

//------------------------ #3 Palindrome ---------------------
function isPalindrome(str, tabs = "  ") {
  console.log(`${tabs}isPalindrome(${str})`);
  if (str.length === 0) return true;
  if (str[0] !== str[str.length - 1]) return false;
  const newStr = str.slice(1, str.length - 1);
  return isPalindrome(newStr, tabs + "  ");
}

console.log(isPalindrome("level")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("baab")); // true
console.log(isPalindrome("step on no pets")); // true
console.log(isPalindrome("high")); // false
console.log(isPalindrome("hi")); // false
console.log(isPalindrome("palindrome")); // false
console.log(isPalindrome("x")); // true
console.log(isPalindrome("")); // true
