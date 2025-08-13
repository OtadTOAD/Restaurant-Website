import { TranslocoPipe } from '@ngneat/transloco';
import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-footer',
  imports: [CardModule, ButtonModule, TranslocoPipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

}
