import { TranslocoPipe } from '@ngneat/transloco';
import { RouterLink } from '@angular/router';
import { AfterViewInit, Component, ElementRef } from '@angular/core';


@Component({
  selector: 'app-landing',
  imports: [TranslocoPipe, RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing implements AfterViewInit { 
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.initIntersectionObserver();
    }, 50);
  }

  initIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const elementObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const gridObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.menu-item');
          items.forEach(item => item.classList.add('animate'));
          gridObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(
      '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in'
    ).forEach(el => elementObserver.observe(el));
    document.querySelectorAll('.menu-grid').forEach(grid => gridObserver.observe(grid));
  }
}
