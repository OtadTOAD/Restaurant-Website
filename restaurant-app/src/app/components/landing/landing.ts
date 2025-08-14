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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in'
    );
    animatedElements.forEach(el => observer.observe(el));
  }
}
