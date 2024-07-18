"use strict";
// 24. More Conditional Tests: 
// You don’t have to limit the number of tests you create to 10. If you want to try more 
// comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
// to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in an array
// • Test whether an item is not in an array
//equality and in equality with strings
let fruit = "mango";
let fruit1 = "apple";
console.log(fruit !== fruit1);
console.log(fruit === fruit1);
//lower case function
let name1 = "MAHEEN";
let name2 = "maheen";
let name3 = name1.toLowerCase();
console.log(name2 === name3);
console.log(name1 === name2);
//numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 5;
let num2 = 10;
console.log(num1 !== num2);
console.log(num1 === num2);
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
//tests using "and" and "or" operators
console.log(5 >= 5 && 5 > 4);
console.log(5 > 4 && 5 <= 4);
console.log(5 >= 5 || 5 > 4);
console.log(5 < 4 || 5 <= 4);
//Test whether an item is in an array
let fruits = ["apple", "mango", "banana"];
console.log(fruits.includes("mango"));
console.log(fruits.includes("lechees"));
//Test whether an item is not in an array
console.log(!fruits.includes("banana"));
console.log(!fruits.includes("orange"));
