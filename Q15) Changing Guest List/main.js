"use strict";
//15. Changing Guest List
//You just heard that one of your guests can’t make the dinner, so you need to send out a new set 
//of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating
//the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new 
//person you are inviting.
//• Print a second set of invitation messages, one for each person who is stillin your list.
let guestList = ["Iqra", "Sahar", "Hina Naseer"];
let unableToAttend = guestList.splice(1, 1)[0];
console.log(`${unableToAttend}, you are not invited to dinner`);
guestList.push("Rafia");
guestList.forEach(guestList => {
    console.log(`${guestList} you are invited to dinner`);
});
