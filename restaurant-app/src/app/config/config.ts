
import { ProductType } from '../components/products-nav-bar/products-nav-bar';
import { Product } from '../models/products';

export const PLACEHOLDER_PRODUCT: Product = {
  description: "Product Not Found",
  img: "Not Found", //placeholder
  name: "Not Found",
  pieceAmount: 0,
  price: 0,
  ingredients: [],
}


export const PRODUCT_TYPE_OPTIONS: ProductType[] = [
  { label: 'Sushi', slug: "sushi" },
  { label: 'Wok', slug: "wok" },
  { label: 'Soup', slug: "soup" },
  { label: 'Set', slug: "set" },
  { label: 'Other', slug: "" },
]




