import { TranslocoPipe } from '@ngneat/transloco';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { PRODUCT_TYPE_OPTIONS } from '../../config/config';
import { ProductType } from '../products-nav-bar/products-nav-bar';

const COLUMN_SIZE = 4;

@Component({
  selector: 'app-footer',
  imports: [TranslocoPipe, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  readonly productColumns: ProductType[][] = PRODUCT_TYPE_OPTIONS.reduce<ProductType[][]>((cols, type, i) => {
    if (i % COLUMN_SIZE === 0) cols.push([]);
    cols[cols.length - 1].push(type);
    return cols;
  }, []);
}
