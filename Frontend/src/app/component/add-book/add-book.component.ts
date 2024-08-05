import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent implements OnInit {
  bookForm!: FormGroup;
 

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private router: Router,
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      title: ['', [Validators.required,Validators.minLength(3)]],
      author: ['', [Validators.required,Validators.minLength(3)]],
      isbn: ['', [Validators.required]],
      publicationDate: ['', [Validators.required]],
      publisher: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(0)]],
  
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const formData: any = {
        title: this.bookForm.value.title,
        author: this.bookForm.value.author,
        isbn: this.bookForm.value.isbn,
        publicationDate: this.bookForm.value.publicationDate,
        publisher: this.bookForm.value.publisher,
        price: this.bookForm.value.price
      };
  
      console.log(formData);
      this.bookService.addBook(formData).subscribe(
        (book) => {
          console.log('Book created successfully:', book);
   
          this.router.navigate(['book']);
        },
        (error) => {
          console.error('Error creating book:', error);
        
        }
      );
      this.bsModalRef.hide();
    } else {
      alert("please provide all necessary fields");
    }
  }
  
}