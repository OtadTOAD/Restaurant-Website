import { TranslocoService, TranslocoPipe } from '@ngneat/transloco';
import { RouterLink } from '@angular/router';
import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgStyle, TranslocoPipe, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  hamburgerOpen = false;
  @ViewChild('langBtn', { read: ElementRef }) langBtn!: ElementRef<HTMLButtonElement>;
  dropdownPos = { top: 0, left: 0, width: 0 };
  dropdownOpen = false;

  constructor(private translocoService: TranslocoService) {
    combineLatest([
      this.translocoService.selectTranslate('ABOUT_US'),
      this.translocoService.selectTranslate('CONTACT_US'),
      this.translocoService.selectTranslate('LANGUAGE')
    ]).subscribe(([aboutLabel, contactLabel, langLabel]) => {
    });
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    if (this.dropdownOpen) {
      this.updateDropdownPosition();
    }
  }

  updateDropdownPosition() {
    const rect = this.langBtn.nativeElement.getBoundingClientRect();
    this.dropdownPos = {
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
    };
  }
  @HostListener('document:scroll', ['$event'])
  onScroll(event: Event) {
    this.dropdownOpen = false;
  }
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (
      this.dropdownOpen &&
      !this.langBtn.nativeElement.contains(event.target as Node)
    ) {
      this.dropdownOpen = false;
    }
  }
  @HostListener('window:resize')
  onResize() {
    if (this.dropdownOpen) {
      this.updateDropdownPosition();
    }
  }

  setLang(lang: string) {
    this.translocoService.setActiveLang(lang)
  }

  handleHamburgerClick() {
    if (this.hamburgerOpen) {
      this.hamburgerOpen = false;
    } else {
      this.hamburgerOpen = true;
    }
  }

}
