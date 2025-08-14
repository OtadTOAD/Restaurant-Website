import { TranslocoService, TranslocoPipe } from '@ngneat/transloco';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(private translocoService: TranslocoService) {
    combineLatest([
      this.translocoService.selectTranslate('ABOUT_US'),
      this.translocoService.selectTranslate('CONTACT_US'),
      this.translocoService.selectTranslate('LANGUAGE')
    ]).subscribe(([aboutLabel, contactLabel, langLabel]) => {
    });
  }

  setLang(lang: string) {
    this.translocoService.setActiveLang(lang)
  }
}
