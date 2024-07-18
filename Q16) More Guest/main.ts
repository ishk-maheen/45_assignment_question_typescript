//16. More Guests: 
// You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.

let guestList :string[]= ["Iqra","Rafia","Hina Naseer"];
console.log(`congratulations! ${guestList}, We found a bigger dinner table`);

guestList.unshift("Abdullah");

guestList.splice(Math.floor(guestList.length/2),0,"Batool");

guestList.push("Zunaira");

guestList.forEach(guestList => {
    console.log(`${guestList},you are invited to dinner`)
});


