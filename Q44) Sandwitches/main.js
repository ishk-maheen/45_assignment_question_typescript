"use strict";
// 44. Sandwiches: 
// Write a function that accepts an array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwiches(...items) {
    console.log("Make a sandwich using");
    items.forEach(item => {
        console.log(item);
    });
    console.log("Enjoy your own make sandwich");
}
sandwiches("Bread", "Chicken", "Ketchup");
sandwiches("Bread", "Chicken", "lettuce", "Ketchup");
sandwiches("Bread", "Chicken", "Ketchup", "lettuce", "Cucumber");
// function make_sandwich(...item:string[]){
//     console.log(("\nMake A Sandwich:\n"))
//     item.forEach(singleItem => {
//         console.log(singleItem)}
//     )
//     console.log(("\nEnjoy Your Own Make Sandwich\n"));
// }
