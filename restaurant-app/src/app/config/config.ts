
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
  { label: 'SUSHI', icon: "/assets/icons/sushi.png", slug: "sushi" },
  { label: 'ROLL', icon: "/assets/icons/roll.png", slug: "roll"},
  { label: 'SET', icon: "/assets/icons/set.png", slug: "set" },
  { label: 'WOK', icon: "/assets/icons/wok.png", slug: "wok" },
  { label: 'SOUP', icon: "/assets/icons/soup.png", slug: "soup" },
  { label: 'OTHER', icon: "/assets/icons/fry.png", slug: "side_dishes" },
  { label: 'BURGERS', icon: "/assets/icons/hamburger.png", slug: "burgers" },
  { label: 'SALADS', icon: "/assets/icons/salad.png", slug: "salads" },
  { label: 'MAKI', icon: '/assets/icons/maki.png', slug: "maki" },
  { label: 'COFFEE', icon: '/assets/icons/cold_drinks.png', slug: "coffee" },
  { label: 'COLD_DRINKS', icon: '/assets/icons/alcohol.png', slug: "cold_drinks" },
  { label: 'ALCOHOL', icon: '/assets/icons/coffee.png', slug: "alcohol" }
]




