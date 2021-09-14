import { LayoutType } from './../../../../shared/enums/layout.enum';
import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/shared/services/contacts.service';
import { Contact } from 'src/app/shared/models/contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.sass']
})
export class ContactsListComponent implements OnInit {

  public layoutType = LayoutType;
  public layout: LayoutType = LayoutType.LIST;

  public contacts: Array<Contact> = [];
  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.contactsService.findAll().subscribe(
      data => this.contacts = data,
      err => console.log(err));
  }

  public orderByName() {
    this.contacts = this.contacts.sort((a,b) =>  a.name > b.name ? 1 : -1)
  }

  public orderByDate() {
    this.contacts = this.contacts.sort((a,b) =>  a.created > b.created ? 1 : -1)
  }

  public changeLayout(type: LayoutType) {
    this.layout = type;
  }
}
