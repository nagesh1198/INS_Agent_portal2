import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewleadsrowclikComponent } from './newleadsrowclik.component';

describe('NewleadsrowclikComponent', () => {
  let component: NewleadsrowclikComponent;
  let fixture: ComponentFixture<NewleadsrowclikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewleadsrowclikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewleadsrowclikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
