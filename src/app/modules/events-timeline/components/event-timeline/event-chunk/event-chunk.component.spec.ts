import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventChunkComponent } from './event-chunk.component';

describe('EventChunkComponent', () => {
  let component: EventChunkComponent;
  let fixture: ComponentFixture<EventChunkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventChunkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventChunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
