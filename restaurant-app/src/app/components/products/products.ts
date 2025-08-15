import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { PLACEHOLDER_PRODUCT, PRODUCT_TYPE_OPTIONS } from '../../config/config';
import { ProductsNavBar, ProductType } from '../products-nav-bar/products-nav-bar';
import { CustomDialogComponent } from '../custom-dialog-component/custom-dialog-component';
import { TranslocoPipe } from '@ngneat/transloco';



@Component({
  selector: 'app-products',
  imports: [CurrencyPipe, CommonModule, CustomDialogComponent, ProductsNavBar, TranslocoPipe],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  showDialog: boolean = false;
  chosenProduct: Product = PLACEHOLDER_PRODUCT;
  productTypes: ProductType[] = PRODUCT_TYPE_OPTIONS;
  products!: Product[];

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productType = params.get('type');
      if (productType) {
        this.productService.getProducts(productType).subscribe((data) => {
          this.products = data;
        }
        );
      }
    })
  }


  handleShowDialog(product: Product) {
    this.chosenProduct = product;
    this.showDialog = true;
  }
}
