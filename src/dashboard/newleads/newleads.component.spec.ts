import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewleadsComponent } from './newleads.component';

describe('NewleadsComponent', () => {
  let component: NewleadsComponent;
  let fixture: ComponentFixture<NewleadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewleadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewleadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
