const {read, write} = require ("./read-write")


const getAllBooks = async() => {
    const fileContent =  await read ("data.json");
    return fileContent;
}

const addBook1 = async(bookData) => {
    let book = await read("data.json")
    book.push(bookData);
    await write("data.json", book);
}

const editBook = async (bookIndex, bookData) =>{
    let books = await read("data.json");
    books = books.map((book, index) => {

        if(bookIndex===index) {
            return {
                ...book,
                ...bookData
            }
        }
        return book;
    })
    await write("data.json", books)
}

const deleteBook = async (bookIndex) =>{
    let books = await read ("data.json");
    books = books.filter((book, index) => index !== bookIndex);
    await write("data.json", books)
}

module.exports = {
    getAllBooks,
    addBook1,
    editBook,
    deleteBook,
}