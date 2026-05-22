import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/products';
import { VERSION } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  http: HttpClient = inject(HttpClient)

  getProducts(type: string): Observable<Product[]> {
    return this.http.get<Product[]>(`/assets/products/${type}.json?v=${VERSION}`);
  }

}
