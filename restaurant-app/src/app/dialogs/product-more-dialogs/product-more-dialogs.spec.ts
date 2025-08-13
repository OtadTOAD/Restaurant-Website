import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMoreDialogs } from './product-more-dialogs';

describe('ProductMoreDialogs', () => {
  let component: ProductMoreDialogs;
  let fixture: ComponentFixture<ProductMoreDialogs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductMoreDialogs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMoreDialogs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
