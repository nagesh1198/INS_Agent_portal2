import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicycoveredComponent } from './policycovered.component';

describe('PolicycoveredComponent', () => {
  let component: PolicycoveredComponent;
  let fixture: ComponentFixture<PolicycoveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicycoveredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicycoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
