const library = [];

function addBook(title, author, yearPublished) {
    const book = {
        title,
        author,
        yearPublished,
        getSummary() {
            return `Title: ${this.title}, Author: ${this.author}, Year: ${this.yearPublished}`;
        }
    };
    library.push(book);
    console.log(`Book titled "${title}" added to the library.`);
}

function viewBooks() {
    if (library.length === 0) {
        console.log("The library is empty.");
    } else {
        console.log("Books in the library:");
        library.forEach(book => {
            console.log(book.getSummary());
        });
    }
}

function deleteBook(title) {
    const index = library.findIndex(book => book.title === title);
    if (index !== -1) {
        library.splice(index, 1);
        console.log(`Book titled "${title}" deleted from the library.`);
    } else {
        console.log(`Book titled "${title}" not found in the library.`);
    }
}

addBook("The Death of Vivek Oji", "Akwaeke Emezi", 2020);
viewBooks();
deleteBook("The Death of Vivek Oji");
viewBooks();
