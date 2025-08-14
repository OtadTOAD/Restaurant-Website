import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNavBar } from './products-nav-bar';

describe('ProductsNavBar', () => {
  let component: ProductsNavBar;
  let fixture: ComponentFixture<ProductsNavBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsNavBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsNavBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
