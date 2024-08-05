import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';
import { BOOKS_URL,BOOK_BY_ID_URL } from '../models/constant';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(BOOKS_URL);
  }

  addBook(newBook: Book): Observable<Book> {
    return this.http.post<Book>(BOOKS_URL, newBook);
  }
  
  getBookById(bookId:string):Observable<Book>{
    return this.http.get<Book>(BOOK_BY_ID_URL + bookId);
  }

  deleteBookById(bookId: string): Observable<void> {
    return this.http.delete<void>(BOOK_BY_ID_URL + bookId);
  }

  editBookById(bookId: string, updatedBook: Book): Observable<Book> {
    return this.http.put<Book>(BOOK_BY_ID_URL + bookId, updatedBook);
  }
}
