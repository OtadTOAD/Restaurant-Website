import { Component, NgZone, OnInit, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { delay, filter, switchMap, take } from 'rxjs';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('restaurant-app');

  constructor(private router: Router, private viewportScroller: ViewportScroller, private zone: NgZone) {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    this.router.events.pipe(filter(event => event instanceof NavigationEnd),
      switchMap(() => this.zone.onStable.pipe(take(1), delay(50)))).subscribe(() => {
        console.log("Scroll");
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
      );
  }
}
