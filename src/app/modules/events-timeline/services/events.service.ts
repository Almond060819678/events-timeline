import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { EventsData, EventsEnum } from '../../../models/events';

const eventsMockData: EventsData = {
  intervalDates: {
    dateStart: "2022-01-01T00:00:00",
    dateEnd: "2022-01-03T00:00:00",
  },
  events: [
    {
      dateStart: "2022-01-01T01:00:00",
      dateEnd: "2022-01-01T02:45:55",
      type: EventsEnum.NORMAL
    },
    {
      dateStart: "2022-01-01T03:17:42",
      dateEnd: "2022-01-01T06:01:00",
      type: EventsEnum.CRITICAL
    },
    {
      dateStart: "2022-01-01T08:21:00",
      dateEnd: "2022-01-01T14:44:11",
      type: EventsEnum.DANGEROUS
    },
    {
      dateStart: "2022-01-01T17:40:33",
      dateEnd: "2022-01-01T18:35:20",
      type: EventsEnum.CRITICAL
    },
    {
      dateStart: "2022-01-01T22:11:00",
      dateEnd: "2022-01-01T23:50:00",
      type: EventsEnum.CRITICAL
    },
    {
      dateStart: "2022-01-02T01:00:00",
      dateEnd: "2022-01-02T04:45:00",
      type: EventsEnum.DANGEROUS
    },
    {
      dateStart: "2022-01-02T07:00:00",
      dateEnd: "2022-01-02T10:45:30",
      type: EventsEnum.NORMAL
    },
    {
      dateStart: "2022-01-02T12:07:10",
      dateEnd: "2022-01-02T13:22:30",
      type: EventsEnum.NORMAL
    },
    {
      dateStart: "2022-01-02T18:30:00",
      dateEnd: "2022-01-02T22:00:00",
      type: EventsEnum.CRITICAL
    },
  ],
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  fetchEvents(): Observable<EventsData> {
    return of(eventsMockData).pipe(delay(1000 + Math.random() * 500));
  }
}
