import { useEffect, useState } from "react";
import "./Insert.css";
import GenreModel from "../../../Models/3-models/GenerModel";
import BookModel from "../../../Models/3-models/BookModel";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import dataService from "../../../Services/DataService";
import notifyService from "../../../Services/NotifyService";

function Insert(): JSX.Element {

    const [genres, SetGenres] = useState<GenreModel[]>([]);
    const { register, handleSubmit, formState } = useForm<BookModel>();
    const navigate = useNavigate();

    useEffect(() => {
        dataService.getAllGenre()
            .then(dbGenres => SetGenres(dbGenres))
            .catch(err => notifyService.error(err));
    }, []);

    async function send(book: BookModel) {
        try {
            await dataService.addBook(book);
            notifyService.success("Book added successfully");
            navigate("/books");

        }
        catch (err: any) {
            notifyService.error(err);
        }
    }



    return (
        <div className="Insert">
            <h2>Insert Book:</h2>

            <form onSubmit={handleSubmit(send)}>
                <label>Book Name:</label>
                <input type="text"  {...register("bookName")} />
                <span className="Error">{formState.errors.bookName?.message}</span>

                <label>Genre:</label>
                <select required defaultValue="" {...register("genreId")}>
                    <option disabled value="">Pick</option>
                    {genres.map(booksGenres => <option key={booksGenres.genreId} value={booksGenres.genreId}>{booksGenres.genreName}</option>)}
                </select>


                <label>Summary</label>
                <input type="text" {...register("summary")} />


                <label>Book Price:</label>
                <input type="number" step="0.01" {...register("bookPrice")} />

                <label>Book Stock:</label>
                <input type="number" step="0.01" {...register("bookStock")} />


                <br/><br/>
                <button>Add book</button>


            </form>
        </div>
    );
}

export default Insert;
