import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/shared/models/contact.model';

@Component({
  selector: 'app-contacts-list-card',
  templateUrl: './contacts-list-card.component.html',
  styleUrls: ['./contacts-list-card.component.sass']
})
export class ContactsListCardComponent implements OnInit {

  @Input() contact: Contact = new Contact();
  constructor() { }

  ngOnInit(): void {
  }

}
