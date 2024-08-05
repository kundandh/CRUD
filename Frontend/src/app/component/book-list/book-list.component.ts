import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../../models/Book';
import { BookService } from '../../services/book.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddBookComponent } from '../add-book/add-book.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit{
  @ViewChild('editModal') editModal!: TemplateRef<any>;
  books: Book[] = [];
  item: any;
  selectedBook: any;
  modalReference: any;
  bookForm!: FormGroup;
  bsModalRef! : BsModalRef
  
  

  constructor(
    private bookService: BookService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute : ActivatedRoute,
    private openmodalService: BsModalService,
    private modalService: NgbModal,
  ) {
    let bookObservable: Observable<Book[]>;
      bookObservable = bookService.getAll();
      bookObservable.subscribe((serverBooks) => {
        this.books = serverBooks;
      });
  
  }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      isbn: ['', [Validators.required]],
      publicationDate: ['', [Validators.required]],
      publisher: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(0)]],
  
    });
  }

  delete(book: Book): void {
    this.item = book;
    console.log('id: ', this.item._id);

    this.bookService.deleteBookById(this.item._id).subscribe(
      () => {
        console.log(`Book with ID ${this.item._id} deleted successfully.`);

        this.books = this.books.filter((p) => p._id !== this.item._id);
      },
      (error) => {
        console.error(
          `Error deleting product with ID ${this.item._id}:`,
          error
        );
      }
    );
  }
  openEditModal(book: Book): void {
    this.selectedBook = book;
    this.populateForm();
    this.modalReference = this.modalService.open(this.editModal, {
      centered: true,
      scrollable: true,
    });
  }

  populateForm(): void {
    this.bookForm.patchValue({
      title: this.selectedBook.title,
        author: this.selectedBook.author,
        isbn: this.selectedBook.isbn,
        publicationDate: this.selectedBook.publicationDate,
        publisher: this.selectedBook.publisher,
        price: this.selectedBook.price
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const updatedBook: Book = this.bookForm.value;
      const bookId: string = this.selectedBook._id;

      this.bookService.editBookById(bookId, updatedBook).subscribe(
        (result) => {
          console.log(
            `Product with ID ${bookId} updated successfully.`,
            result
          );

          // Update the product in the local array
          const index = this.books.findIndex(
            (p) => p._id.toString() === bookId
          );
          if (index !== -1) {
            this.books[index] = result;
          }

          // Close the modal
          this.modalReference.close();
          this.router.navigate(['books']);
        },
        (error) => {
          console.error(`Error updating product with ID ${bookId}:`, error);
        }
      );
    
    }
  }

  

  closeEditModal(): void {
    this.modalReference.close();
  }

  openModal() {
    this.bsModalRef = this.openmodalService.show(AddBookComponent);

  }
}
