import { Contact } from 'src/app/shared/models/contact.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-list-line',
  templateUrl: './contacts-list-line.component.html',
  styleUrls: ['./contacts-list-line.component.sass']
})
export class ContactsListLineComponent implements OnInit {

  @Input() contact: Contact = new Contact();
  constructor() { }

  ngOnInit(): void {
  }

}
