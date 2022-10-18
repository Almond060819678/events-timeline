import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsTimelineComponent } from './events-timeline.component';

describe('EventTimelineComponent', () => {
  let component: EventsTimelineComponent;
  let fixture: ComponentFixture<EventsTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
