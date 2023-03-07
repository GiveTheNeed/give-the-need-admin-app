import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYouthOrTutorComponent } from './add-youth-or-tutor.component';

describe('AddYouthOrTutorComponent', () => {
  let component: AddYouthOrTutorComponent;
  let fixture: ComponentFixture<AddYouthOrTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddYouthOrTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddYouthOrTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
