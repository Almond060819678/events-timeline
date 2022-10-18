import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Event, EventDatesToMilliseconds, EventsEnum, EventTypes } from '../../../../../models/events';

@Component({
  selector: 'app-event-chunk',
  templateUrl: './event-chunk.component.html',
  styleUrls: ['./event-chunk.component.scss']
})
export class EventChunkComponent implements OnChanges {
  @Input() event: Event;
  @Input() eventsStartMilliseconds: number;
  @Input() eventsEndMilliseconds: number;
  @Input() eventsTimelineLengthMilliseconds: number;
  @Input() first: boolean;
  @Input() last: boolean;

  eventTypeToBackgroundColor: Record<EventTypes, string> = {
    [EventsEnum.CRITICAL]: 'red',
    [EventsEnum.DANGEROUS]: 'rgb(240,170,61)',
    [EventsEnum.NORMAL]: 'rgb(246,199,53)',
  }
  eventTypeToTitleHintText: Record<EventTypes, string> = {
    [EventsEnum.CRITICAL]: 'Critical event',
    [EventsEnum.DANGEROUS]: 'Important event',
    [EventsEnum.NORMAL]: 'Ordinary event',
  };

  eventDatesToMilliseconds: EventDatesToMilliseconds;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['event']) {
      this.eventDatesToMilliseconds = {
        ...this.event,
        dateStart: new Date(this.event.dateStart).getTime(),
        dateEnd: new Date(this.event.dateEnd).getTime(),
      }
    }
  }
}
