// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let book: {
    title: string,
    author: string,
    publicationYear: number
} = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publicationYear: 1937
}
console.log(`Book Info: ${book.title} by ${book.author}, published  in ${book.publicationYear}`);
