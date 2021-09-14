import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsListLineComponent } from './contacts-list-line.component';

describe('ContactsListLineComponent', () => {
  let component: ContactsListLineComponent;
  let fixture: ComponentFixture<ContactsListLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsListLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsListLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
