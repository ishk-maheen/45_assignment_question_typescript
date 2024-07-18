//12. Greetings: 
//Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let names :string[] = ["Iqra","Sahar","Rafia","Maheen"];

names.forEach(names => {
    console.log(`Hello ${names}, How are you?`)
});