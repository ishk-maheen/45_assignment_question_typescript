// 42. Great Magicians: 
// Start with a copy of your program from Exercise 41. Write a function called make_great() that 
// modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
// show_magicians() to see that the list has actually been modified.

function show_magicians(magicians: string[]) {
    magicians.forEach(magicians => {
        console.log(magicians);
        
    });
}

function make_great(magicians: string[]){
    return magicians.map(name => `The great ${name}`)
}
let magicians: string[] = ["John", "Harry","Davin"]
let great_magicians = make_great(magicians)

//eik function k andar dusra function as an argument call karwanay ko call back kehtay
show_magicians(great_magicians)