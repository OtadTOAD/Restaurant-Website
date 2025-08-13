import { Component } from '@angular/core';
import { TranslocoPipe } from '@ngneat/transloco';

@Component({
  selector: 'app-error',
  imports: [TranslocoPipe],
  templateUrl: './error.html',
  styleUrl: './error.css'
})
export class Error {

}
