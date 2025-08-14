import { TranslocoPipe } from '@ngneat/transloco';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';

import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-landing',
  imports: [ButtonModule, TranslocoPipe, RouterLink, AnimateOnScrollModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing { }
