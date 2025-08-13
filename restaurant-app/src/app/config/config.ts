
import { Product } from '../models/products';

export const PLACEHOLDER_PRODUCT: Product = {
  description: "Product Not Found",
  img: "Not Found", //placeholder
  name: "Not Found",
  pieceAmount: 0,
  price: 0,
  ingredients: [],
}


export const PRODUCT_TYPE_OPTIONS = [
  { name: 'Sushi', value: 1 },
  { name: 'Woki', value: 2 },
]
