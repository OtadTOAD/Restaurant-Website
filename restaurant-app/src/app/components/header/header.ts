import { TranslocoService, TranslocoPipe } from '@ngneat/transloco';
import { RouterLink } from '@angular/router';
import { Component, ElementRef, ViewChild, HostListener, AfterViewChecked, OnInit } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { combineLatest } from 'rxjs';
import { LANG_STORE_KEY } from '../../config/config';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgStyle, TranslocoPipe, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  hamburgerOpen = false;
  hamburgerEnabled = false;
  @ViewChild('langBtn', { read: ElementRef }) langBtn!: ElementRef<HTMLButtonElement>;

  dropdownPos = { top: 0, left: 0, width: 0 };
  dropdownOpen = false;

  constructor(private translocoService: TranslocoService) {

    this.translocoService.setActiveLang(localStorage.getItem(LANG_STORE_KEY) ?? 'ka');
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    if (this.dropdownOpen) {
      this.updateDropdownPosition();
    }
  }

  private checkWindowSize() {
    if (this.dropdownOpen) {
      this.updateDropdownPosition();
    }
    this.hamburgerEnabled = window.innerWidth <= 864;
  }

  ngOnInit(): void {
    this.checkWindowSize()
  }

  updateDropdownPosition() {
    let rect = this.langBtn.nativeElement.getBoundingClientRect();

    this.dropdownPos = {
      top: rect.bottom,
      left: rect.left,
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
    this.checkWindowSize()
  }

  setLang(lang: string) {
    localStorage.setItem(LANG_STORE_KEY, lang);
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
