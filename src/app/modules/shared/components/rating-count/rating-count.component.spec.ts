import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingCountComponent } from './rating-count.component';

describe('RatingCountComponent', () => {
  let component: RatingCountComponent;
  let fixture: ComponentFixture<RatingCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingCountComponent]
    });
    fixture = TestBed.createComponent(RatingCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
