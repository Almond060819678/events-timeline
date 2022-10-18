export type EventsData = {
  events: Event[],
  intervalDates: IntervalDates,
}

export interface Event {
  dateStart: string;
  dateEnd: string;
  type: EventTypes;
}

export interface EventDatesToMilliseconds {
  dateStart: number;
  dateEnd: number;
  type: EventTypes;
}

export interface IntervalDates {
  dateStart: string;
  dateEnd: string;
}

export enum EventsEnum {
  NORMAL = "NORMAL",
  DANGEROUS = "DANGEROUS",
  CRITICAL = "CRITICAL",
}

export type EventTypes = EventsEnum.NORMAL | EventsEnum.DANGEROUS | EventsEnum.CRITICAL;
