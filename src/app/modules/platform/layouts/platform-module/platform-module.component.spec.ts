import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformModuleComponent } from './platform-module.component';

describe('PlatformModuleComponent', () => {
  let component: PlatformModuleComponent;
  let fixture: ComponentFixture<PlatformModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformModuleComponent]
    });
    fixture = TestBed.createComponent(PlatformModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
