import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';


@NgModule({
  declarations: [

  
    BookListComponent,
    AddBookComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: []
})
export class ComponentModule { }
