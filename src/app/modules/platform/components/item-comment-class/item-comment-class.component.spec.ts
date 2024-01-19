import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCommentClassComponent } from './item-comment-class.component';

describe('ItemCommentClassComponent', () => {
  let component: ItemCommentClassComponent;
  let fixture: ComponentFixture<ItemCommentClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemCommentClassComponent]
    });
    fixture = TestBed.createComponent(ItemCommentClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
