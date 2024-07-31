import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformHomeComponentComponent } from './platform-home.component';

describe('PlatformHomeComponentComponent', () => {
  let component: PlatformHomeComponentComponent;
  let fixture: ComponentFixture<PlatformHomeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformHomeComponentComponent]
    });
    fixture = TestBed.createComponent(PlatformHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
