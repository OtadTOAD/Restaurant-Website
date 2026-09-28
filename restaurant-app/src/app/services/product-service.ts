import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/products';
import { assetUrl } from '../config/asset-url';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  http: HttpClient = inject(HttpClient)

  getProducts(type: string): Observable<Product[]> {
    return this.http.get<Product[]>(assetUrl(`/assets/products/${type}.json`)).pipe(
      map(products => products.map(product => ({ ...product, img: assetUrl(product.img) })))
    );
  }

}
