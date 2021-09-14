import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { routing } from './contacts-detail-routing.module';



@NgModule({
  declarations: [
    ContactsDetailComponent
  ],
  imports: [
    routing,
    CommonModule
  ]
})
export class ContactsDetailModule { }
