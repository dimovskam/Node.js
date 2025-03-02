const {
    getAllBooks, 
    addBook1,
    editBook,
    deleteBook,
} = require("./books")

async function reading() {
    const books = await getAllBooks();
    console.log("books", books)

    //await addBook1 ({"title":"Кога телото вели не","authot":"Габот Мате","releaseYear":2003})
    //await editBook(0, {releaseYear:2022});
    //await deleteBook(1);
}



reading();

