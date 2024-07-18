//Q3. Name Cases: 
//Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personsName: string = "maHeEn ShEiKh";

// lower case
let lowerCase: string = personsName.toLowerCase();
console.log("LOWER CASE:",lowerCase);

// upper case
let upperCase: string = personsName.toUpperCase();
console.log("UPPER CASE:",upperCase);

// title case
//step 1
let words: string[] = personsName.split(" ");
//step 2
let titleCase: string = "";
//step 3
for (let i = 0; i < words.length; i++) {
    titleCase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";  
}
console.log("TITLE CASE:", titleCase);