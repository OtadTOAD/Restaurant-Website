import { TranslocoPipe } from '@ngneat/transloco';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  imports: [TranslocoPipe, RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing {

}
