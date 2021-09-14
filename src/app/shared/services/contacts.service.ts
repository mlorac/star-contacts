import { Contact } from './../models/contact.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts: Array<Contact> = [];
  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Array<Contact>>("assets/resources/data.json");
  }

  findById(id: string) {

  }

  setFavorite(id: string) {

  }
}
