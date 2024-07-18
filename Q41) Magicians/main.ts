// 41. Magicians: 
// Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
// prints the name of each magician in the array.


let magicians : string[] = ["John","Harry","Davin"]

function show_magicians(magicians: string[]) {
    magicians.forEach(magicians => {
        console.log(magicians);
        
    });
}
show_magicians(magicians);