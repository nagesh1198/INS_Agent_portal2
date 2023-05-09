import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgprotectComponent } from './cgprotect.component';

describe('CgprotectComponent', () => {
  let component: CgprotectComponent;
  let fixture: ComponentFixture<CgprotectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgprotectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CgprotectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
