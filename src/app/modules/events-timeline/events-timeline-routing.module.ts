import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsTimelineIndexComponent } from './components/index/events-timeline-index.component';

const routes: Routes = [
  {
    path: '',
    component: EventsTimelineIndexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsTimelineRoutingModule { }
