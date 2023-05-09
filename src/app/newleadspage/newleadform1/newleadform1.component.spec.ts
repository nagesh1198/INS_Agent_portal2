import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newleadform1Component } from './newleadform1.component';

describe('Newleadform1Component', () => {
  let component: Newleadform1Component;
  let fixture: ComponentFixture<Newleadform1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Newleadform1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newleadform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
