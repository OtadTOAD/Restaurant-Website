import { TranslocoPipe } from '@ngneat/transloco';
import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  imports: [ButtonModule, TranslocoPipe],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing {

}
