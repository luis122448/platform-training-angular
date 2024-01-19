import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformVideoComponent } from './platform-video.component';

describe('PlatformVideoComponent', () => {
  let component: PlatformVideoComponent;
  let fixture: ComponentFixture<PlatformVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformVideoComponent]
    });
    fixture = TestBed.createComponent(PlatformVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
