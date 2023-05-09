import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotaionComponent } from './quotaion.component';

describe('QuotaionComponent', () => {
  let component: QuotaionComponent;
  let fixture: ComponentFixture<QuotaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotaionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
