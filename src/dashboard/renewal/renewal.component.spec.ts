import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalComponent } from './renewal.component';

describe('RenewalComponent', () => {
  let component: RenewalComponent;
  let fixture: ComponentFixture<RenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
