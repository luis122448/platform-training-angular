import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentClassComponent } from './comment-class.component';

describe('CommentClassComponent', () => {
  let component: CommentClassComponent;
  let fixture: ComponentFixture<CommentClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentClassComponent]
    });
    fixture = TestBed.createComponent(CommentClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
