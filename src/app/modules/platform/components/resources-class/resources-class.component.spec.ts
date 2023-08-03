import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesClassComponent } from './resources-class.component';

describe('ResourcesClassComponent', () => {
  let component: ResourcesClassComponent;
  let fixture: ComponentFixture<ResourcesClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcesClassComponent]
    });
    fixture = TestBed.createComponent(ResourcesClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
