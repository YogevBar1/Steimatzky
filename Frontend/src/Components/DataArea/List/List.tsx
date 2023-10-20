import { useEffect, useState } from "react";
import BookModel from "../../../Models/3-models/BookModel";
import "./List.css";
import dataService from "../../../Services/DataService";
import notifyService from "../../../Services/NotifyService";

function List(): JSX.Element {

    const [books, setBooks] = useState<BookModel[]>([]);

    useEffect(() => {
        dataService.getAllBooks()
            .then(backendBooks => setBooks(backendBooks))
            .catch(err => notifyService.error(err));

    }, []);

    async function deleteBook(bookId: number) {
        try {
            const confrim = window.confirm("Are you sure you want delete this book?");
            if(!confrim) return;
            await dataService.deleteBook(bookId);
            setBooks(books.filter(b=>b.bookId !== bookId));
            notifyService.success("Book has been deleted");

        }
        catch(err: any) {
            notifyService.error(err);

        }
    }


    return (
        <div className="List">
            <h2>Our Books:</h2>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Genre</th>
                        <th>Summary</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book =>


                        <tr key={book.bookId}>
                            <td>{book.bookName}</td>
                            <td>{book.genreName}</td>
                            <td>{book.summary}</td>
                            <td>{book.bookPrice}</td>
                            <td>{book.bookStock}</td>
                            <td><button className="btn btn-danger" onClick={() => deleteBook(book.bookId)}>Delete❌</button></td>
                        </tr>)}

                </tbody>
            </table>
        </div>
    );
}

export default List;
