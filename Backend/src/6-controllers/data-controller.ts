import express, { Request, Response, NextFunction } from "express";
import dataService from "../5-services/data-service";
import BookModel from "../3-models/book-model";
import StatusCode from "../3-models/status-code";

const router = express.Router();

// GET http://localhost:4000/api/books
router.get("/books", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const books = await dataService.getAllBooks();
        response.json(books);
    }
    catch (err: any) {
        next(err);
    }
});

// POST http://localhost:4000/api/books
router.post("/books", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const book = new BookModel(request.body);
        const addedBook = await dataService.addBook(book);
        response.status(StatusCode.Created).json(addedBook);
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:4000/api/genres
router.get("/genres", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const genres = await dataService.getAllGenres();
        response.json(genres);
    }
    catch (err: any) {
        next(err);
    }
});

// Delete http://localhost:4000/api/furniture/:id
router.delete("/books/:id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const bookId = + request.params.id;
        await dataService.deleteBook(bookId);
        response.sendStatus(StatusCode.NoContent);

    }
    catch (err: any) {
        next(err);
    }
});



export default router;
