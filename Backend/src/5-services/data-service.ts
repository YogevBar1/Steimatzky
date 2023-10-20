import dal from "../2-utils/dal";
import { OkPacket } from "mysql";
import BookModel from "../3-models/book-model";
import { number } from "joi";
import { ResourceNotFoundError } from "../3-models/client-errors";
import GenreModel from "../3-models/gener-model";


async function getAllBooks(): Promise<BookModel[]> {
    const sql = 
    "SELECT * FROM books JOIN genres ON books.genreId = genres.genreId";

    const books = await dal.execute(sql);
    return books;
}

async function addBook(book: BookModel): Promise<BookModel>{
    book.validate();
    const sql = "INSERT INTO books VALUES(DEFAULT,?,?,?,?,?)";
    const info: OkPacket =await dal.execute(sql,[book.bookName, book.summary, book.bookPrice, book.bookStock , book.genreId]);
    book.bookId = info.insertId;
    return book;
}

async function getAllGenres(): Promise<GenreModel[]>{
    const sql = "SELECT * FROM genres";
    const genres = await dal.execute(sql);
    return genres;
}

async function  deleteBook(bookId: number): Promise<void>{
    const sql = `delete FROM books where bookId =?`;
    const info: OkPacket = await dal.execute(sql, [bookId]);
    if(info.affectedRows ===0) throw new ResourceNotFoundError(bookId);
}



export default {
    getAllBooks,
    addBook,
    getAllGenres,
    deleteBook
};

