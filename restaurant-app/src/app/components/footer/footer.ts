import { TranslocoPipe } from '@ngneat/transloco';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [TranslocoPipe, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

}
