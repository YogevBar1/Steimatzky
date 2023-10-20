

class BookModel {
    public bookId: number;
    public bookName: string;
    public genreId: number;
    public summary: string;
    public bookPrice: number;
    public bookStock: number;
    public genreName: string;




// public static genreIdValidation = {

//     required: { value: true, message: "You must choose genre" }
// };

// public static bookNameValidation= {

//     required: { value: true, message: "You must insert book name" },
//     maxLength: { value: 50, message: "Book name too long" },
// };


// public static summaryValidation= {

//     required: { value: true, message: "You must insert summary" },
//     maxLength: { value: 350, message: "Summary too long" },
//     minLength: { value: 10, message: "Summary should be longer then 10 chars" }
// };

// public static bookPriceValidation= {

//     required: { value: true, message: "You must insert book price" },
//     maxLength: { value: 350, message: "Summary too long" },
//     minLength: { value: 10, message: "Summary should be longer then 10 chars" }
// };




}


export default BookModel;