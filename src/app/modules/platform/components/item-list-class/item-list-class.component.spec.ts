import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListClassComponent } from './item-list-class.component';

describe('ItemListClassComponent', () => {
  let component: ItemListClassComponent;
  let fixture: ComponentFixture<ItemListClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListClassComponent]
    });
    fixture = TestBed.createComponent(ItemListClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
