// 32. Checking Usernames: 
// Do the following to create a program that simulates how websites ensure that everyone has a 
// unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames 
// are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print 
// a message that the person will need to enter a new username. If a username has not been used, print 
// a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be 
// accepted.

let current_users : string[] = ["Maheen","Fiza","Iqra","Sahar","Zunaira"];

let new_users : string[] = ["Ahmed","maheen","Rafia","sahar","Abdullah",];

new_users.forEach(new_user1 => {
    let condition = current_users.some(current_user1 => current_user1.toLowerCase() === new_user1.toLowerCase());
    if(condition) {
    console.log(`Sorry ${new_user1} name is already taken`);
    } else {
        console.log(`The ${new_user1} is available`);
        
    }
    });