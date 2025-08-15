
import { ProductType } from '../components/products-nav-bar/products-nav-bar';
import { Product } from '../models/products';

export const PLACEHOLDER_PRODUCT: Product = {
  img: "Not Found", //placeholder
  name: "Not Found",
  pieceAmount: 0,
  price: 0,
  ingredients: [],
}


export const PRODUCT_TYPE_OPTIONS: ProductType[] = [
  { label: 'SUSHI', icon: "🍣", slug: "sushi" },
  { label: 'ROLL', icon: "🍙", slug: "roll"},
  { label: 'SET', icon: "🍱", slug: "set" },
  { label: 'WOK', icon: "🍜", slug: "wok" },
  { label: 'SOUP', icon: "🍵", slug: "soup" },
  { label: 'OTHER', icon: "🍟", slug: "side_dishes" },
  { label: 'BURGERS', icon: "🍔", slug: "burgers" },
  { label: 'SALADS', icon: "🥗", slug: "salads" },
  { label: 'MAKI', icon: '🥢', slug: "maki" },
  { label: 'COFFEE', icon: '☕', slug: "coffee" },
  { label: 'COLD_DRINKS', icon: '🥤', slug: "cold_drinks" },
  { label: 'ALCOHOL', icon: '🍺', slug: "alcohol" }
]




