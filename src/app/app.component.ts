import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Router,
  Event,
  RouteConfigLoadStart,
  RouteConfigLoadEnd
} from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Events Application';
  loading = false;

  private readonly destroyed$: Subject<void> = new Subject<void>();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      takeUntil(this.destroyed$),
    ).subscribe(
      (event: Event) => this.handleRouterEvent(event)
    );
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private handleRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof RouteConfigLoadStart) {
      console.log('Lazy-loading module...')
    }

    if (routerEvent instanceof RouteConfigLoadEnd) {
      console.log('...lazy-loading completed')
    }
  }
}
