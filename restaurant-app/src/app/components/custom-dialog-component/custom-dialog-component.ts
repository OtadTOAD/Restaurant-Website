import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { TranslocoPipe } from '@ngneat/transloco';

@Component({
  selector: 'app-custom-dialog',
  imports: [CommonModule, TranslocoPipe],
  templateUrl: './custom-dialog-component.html',
  styleUrls: ['./custom-dialog-component.css']
})
export class CustomDialogComponent {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  @Input() title: string | null = null;
  @Input() closable = true;

  close() {
    if (!this.visible) return;
    this.visible = false;
    this.visibleChange.emit(false);
  }

  open() {
    if (this.visible) return;
    this.visible = true;
    this.visibleChange.emit(true);
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.closable) this.close();
  }

  onDialogClick(e: MouseEvent) {
    e.stopPropagation();
  }
}
