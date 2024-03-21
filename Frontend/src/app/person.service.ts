import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from './models/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  addProduct(newPerson: Person): Observable<Person> {
    return this.http.post<Person>(PRODUCTS_URL, newPerson);
  }
}
