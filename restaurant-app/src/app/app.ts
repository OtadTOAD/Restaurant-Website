import { Component, NgZone, OnInit, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { delay, filter, switchMap, take } from 'rxjs';
import { ViewportScroller } from '@angular/common';
import { assetUrl } from './config/asset-url';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('restaurant-app');
  protected readonly backgroundImage = `url("${assetUrl('/assets/img/background.webp')}")`;

  constructor() {
    document.querySelector('link[rel="icon"]')?.setAttribute('href', assetUrl('/icon.png'));
  }
}
