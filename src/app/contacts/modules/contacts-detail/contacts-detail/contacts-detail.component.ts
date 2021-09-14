import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.sass']
})
export class ContactsDetailComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  rollback() {
    this.location.back();
  }
}
