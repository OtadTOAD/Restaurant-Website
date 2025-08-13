import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-footer',
  imports: [CardModule, ButtonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

}
