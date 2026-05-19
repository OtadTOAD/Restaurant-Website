import { TranslocoPipe } from '@ngneat/transloco';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [TranslocoPipe],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css'
})
export class AboutUs {

}
