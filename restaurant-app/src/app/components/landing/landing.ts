import { TranslocoPipe } from '@ngneat/transloco';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  imports: [ButtonModule, TranslocoPipe, RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing {

}
