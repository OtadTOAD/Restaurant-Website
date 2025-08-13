import { TranslocoPipe } from '@ngneat/transloco';
import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  imports: [TranslocoPipe],
  templateUrl: './error.html',
  styleUrl: './error.css'
})
export class Error {

}
