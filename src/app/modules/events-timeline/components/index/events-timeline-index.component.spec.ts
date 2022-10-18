import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsTimelineIndexComponent } from './events-timeline-index.component';

describe('IndexComponent', () => {
  let component: EventsTimelineIndexComponent;
  let fixture: ComponentFixture<EventsTimelineIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsTimelineIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsTimelineIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
