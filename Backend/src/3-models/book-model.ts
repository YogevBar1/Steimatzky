import Joi from "joi";
import { ValidationError } from "./client-errors";

class BookModel {
    public bookId: number;
    public bookName: string;
    public genreId: number;
    public summary: string;
    public bookPrice: number;
    public bookStock: number;


    public constructor(book: BookModel) {
        this.bookId = book.bookId;
        this.bookName = book.bookName;
        this.genreId = book.genreId;
        this.summary = book.summary;
        this.bookPrice = book.bookPrice;
        this.bookStock = book.bookStock;

    }

    // Creating a validation with Joi

    private static validationSchema = Joi.object({
        bookId: Joi.number().optional().positive().integer(),
        bookName: Joi.string().optional().min(3).max(50),
        genreId: Joi.number().required().positive().integer(),
        summary: Joi.string().required().min(5).max(350),
        bookPrice: Joi.number().required().min(1).max(9999.99),
        bookStock: Joi.number().required().positive().integer(),

    });

    public validate(): void{
        const result = BookModel.validationSchema.validate(this);
        if(result.error?.message) throw new ValidationError(result.error.message);
    }
}

export default BookModel;