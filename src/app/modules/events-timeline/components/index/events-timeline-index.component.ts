import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { finalize, Subject, takeUntil } from 'rxjs';
import { EventsData } from '../../../../models/events';

@Component({
  selector: 'app-events-timeline-index',
  templateUrl: './events-timeline-index.component.html',
  styleUrls: ['./events-timeline-index.component.scss']
})
export class EventsTimelineIndexComponent implements OnInit, OnDestroy {
  isLoading = false;
  eventsData: EventsData;

  private readonly destroyed$: Subject<void> = new Subject();

  constructor(
    private eventsService: EventsService,
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.eventsService.fetchEvents().pipe(
      takeUntil(this.destroyed$),
      finalize(() => this.isLoading = false),
    ).subscribe(data => {
      console.log("Timeline events data has been successfully fetched: ", data);
      this.eventsData = data;
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
