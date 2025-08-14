import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/products';
import { PLACEHOLDER_PRODUCT } from '../../config/config';
@Component({
  selector: 'app-product-more-dialogs',
  imports: [],
  templateUrl: './product-more-dialogs.html',
  styleUrl: './product-more-dialogs.css'
})
export class ProductMoreDialogs {
  @Input() product: Product = PLACEHOLDER_PRODUCT;
  private _visible: boolean = false;



  @Input()
  get visible() {
    return this._visible;
  }
  set visible(visible: boolean) {
    this._visible = visible;
    this.visibleChange.emit(visible);
  }
  @Output() visibleChange = new EventEmitter<boolean>();

}
