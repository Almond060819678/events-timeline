import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { EventsTimelineModule } from './modules/events-timeline/events-timeline.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(({ DashboardModule }) => DashboardModule),
  },
  {
    path: 'timeline',
    loadChildren: () => import('./modules/events-timeline/events-timeline.module').then(({ EventsTimelineModule }) => EventsTimelineModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
