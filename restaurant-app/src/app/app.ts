import { Component, OnInit, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { filter } from 'rxjs';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('restaurant-app');

  constructor(private router: Router, private viewportScroller: ViewportScroller) {

  }
  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((_: any) => {
      console.log("Scroll");
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      // this.viewportScroller.scrollToPosition([0, 0]);
    }
    );
  }
}
