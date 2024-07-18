"use strict";
//Q3. Name Cases: 
//Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personsName = "maHeEn ShEiKh";
// lower case
let lowerCase = personsName.toLowerCase();
console.log("LOWER CASE:", lowerCase);
// upper case
let upperCase = personsName.toUpperCase();
console.log("UPPER CASE:", upperCase);
// title case
//step 1
let words = personsName.split(" ");
//step 2
let titleCase = "";
//step 3
for (let i = 0; i < words.length; i++) {
    titleCase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log("TITLE CASE:", titleCase);
