import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsTimelineRoutingModule } from './events-timeline-routing.module';
import { EventsTimelineIndexComponent } from './components/index/events-timeline-index.component';
import { EventsTimelineComponent } from './components/event-timeline/events-timeline.component';
import { EventChunkComponent } from './components/event-timeline/event-chunk/event-chunk.component';


@NgModule({
  declarations: [
    EventsTimelineIndexComponent,
    EventsTimelineComponent,
    EventChunkComponent
  ],
  imports: [
    CommonModule,
    EventsTimelineRoutingModule
  ]
})
export class EventsTimelineModule { }
