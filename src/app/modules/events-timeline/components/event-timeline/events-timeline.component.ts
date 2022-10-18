import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EventsData } from '../../../../models/events';

@Component({
  selector: 'app-events-timeline',
  templateUrl: './events-timeline.component.html',
  styleUrls: ['./events-timeline.component.scss']
})
export class EventsTimelineComponent implements OnChanges {
  @Input() eventsData: EventsData;
  dateStartsMilliseconds: number;
  dateEndsMilliseconds: number;
  timelineLengthMilliseconds: number;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['eventsData']) {
      this.dateStartsMilliseconds = new Date(this.eventsData.intervalDates.dateStart).getTime();
      this.dateEndsMilliseconds = new Date(this.eventsData.intervalDates.dateEnd).getTime();
      this.timelineLengthMilliseconds = this.dateEndsMilliseconds - this.dateStartsMilliseconds;
    }
  }
}
