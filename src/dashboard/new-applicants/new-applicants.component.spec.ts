import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewApplicantsComponent } from './new-applicants.component';

describe('NewApplicantsComponent', () => {
  let component: NewApplicantsComponent;
  let fixture: ComponentFixture<NewApplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewApplicantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
