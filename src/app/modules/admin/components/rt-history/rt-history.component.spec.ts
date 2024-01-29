import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtHistoryComponent } from './rt-history.component';

describe('RtHistoryComponent', () => {
  let component: RtHistoryComponent;
  let fixture: ComponentFixture<RtHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RtHistoryComponent]
    });
    fixture = TestBed.createComponent(RtHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
