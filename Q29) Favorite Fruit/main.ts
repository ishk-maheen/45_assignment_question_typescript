// 29. Favorite Fruit: 
// Make an array of your favorite fruits, and then write a series of independent if statements that 
// check for certain fruits in your array.
// • Make an array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit 
// is in your array, the if block should print a statement,
// such as You really like bananas!

let favourite_fruits : string[] = ["Mango","Banana","Grapes"];

if (favourite_fruits.includes("Mango")) {
    console.log("You really like Mango!");
}

if (favourite_fruits.includes("Banana")) {
    console.log("You really like Banana!");
}

if (favourite_fruits.includes("Grapes")) {
    console.log("You really like Grapes!");
}

if (favourite_fruits.includes("Pine Apple")) {
    console.log("You really like Pine Apple!");
}

if (favourite_fruits.includes("Orange")) {
    console.log("You really like Orange!");
}