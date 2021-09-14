import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsListCardComponent } from './contacts-list-card.component';

describe('ContactsListCardComponent', () => {
  let component: ContactsListCardComponent;
  let fixture: ComponentFixture<ContactsListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
