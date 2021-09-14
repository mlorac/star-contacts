import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsListCardComponent } from './components/contacts-list-card/contacts-list-card.component';
import { ContactsListLineComponent } from './components/contacts-list-line/contacts-list-line.component';
import { routing } from './contacts-list-routing.module';
import { ContactsService } from 'src/app/shared/services/contacts.service';



@NgModule({
  declarations: [
    ContactsListComponent,
    ContactsListCardComponent,
    ContactsListLineComponent
  ],
  imports: [
    routing,
    CommonModule
  ],
  providers: [
    ContactsService
  ]
})
export class ContactsListModule { }
