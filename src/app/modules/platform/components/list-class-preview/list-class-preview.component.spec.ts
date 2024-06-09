import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClassPreviewComponent } from './list-class-preview.component';

describe('ListClassPreviewComponent', () => {
  let component: ListClassPreviewComponent;
  let fixture: ComponentFixture<ListClassPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListClassPreviewComponent]
    });
    fixture = TestBed.createComponent(ListClassPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
