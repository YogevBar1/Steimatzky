import axios from "axios";
import appConfig from "../Utils/AppConfig";
import BookModel from "../Models/3-models/BookModel";
import GenreModel from "../Models/3-models/GenerModel";

class DataService {
    public async getAllBooks(): Promise<BookModel[]> {
        const response = await axios.get(appConfig.booksUrl);
        const books = response.data;
        return books;        
        
    }

    public async getAllGenre(): Promise<GenreModel[]> {
        const response = await axios.get(appConfig.booksGenresUrl);
        const booksGenres = response.data;
        return booksGenres;        
        
    }

    public async addBook(book: BookModel): Promise<void> {
      
        await axios.post(appConfig.booksUrl, book);
    }

    public async deleteBook(bookId: number): Promise<void> {
        await axios.delete(appConfig.booksUrl + bookId);
        
       
        
    }




    

}

const dataService = new DataService();

export default dataService;
