import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopcardsComponent } from './topcards.component';

describe('TopcardsComponent', () => {
  let component: TopcardsComponent;
  let fixture: ComponentFixture<TopcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
