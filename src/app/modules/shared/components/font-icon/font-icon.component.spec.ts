import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontIconComponent } from './font-icon.component';

describe('FontIconComponent', () => {
  let component: FontIconComponent;
  let fixture: ComponentFixture<FontIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FontIconComponent]
    });
    fixture = TestBed.createComponent(FontIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
