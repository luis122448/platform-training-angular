import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformQuestResultComponent } from './platform-quest-result.component';

describe('PlatformQuestResultComponent', () => {
  let component: PlatformQuestResultComponent;
  let fixture: ComponentFixture<PlatformQuestResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformQuestResultComponent]
    });
    fixture = TestBed.createComponent(PlatformQuestResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
