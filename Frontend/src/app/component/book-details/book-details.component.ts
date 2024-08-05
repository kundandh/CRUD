import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/Book';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {

  book!: Book;
  bookForm! : FormGroup

 constructor(activatedRoute: ActivatedRoute,
  bookService: BookService,
  private router: Router,){
  activatedRoute.params.subscribe((params) => {
    if (params['id'])
      bookService
        .getBookById(params['id'])
        .subscribe((serverBook) => {
          this.book = serverBook;
          console.log(this.book)
        });
  });


  this.bookForm.patchValue({
      title: this.book.title,
        author: this.book.author,
        isbn: this.book.isbn,
        publisherDate: this.book.publicationDate,
        publisher: this.book.publisher,
        price: this.book.price
 })
}
 onSubmit(){
  
 }
}

