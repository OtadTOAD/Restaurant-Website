
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
  { label: 'SUSHI', icon: "/assets/icons/sushi.png", emoji: '🍣', slug: "sushi" },
  { label: 'ROLL', icon: "/assets/icons/roll.png", emoji: '🍙', slug: "roll" },
  { label: 'SET', icon: "/assets/icons/set.png", emoji: '🍱', slug: "set" },
  { label: 'WOK', icon: "/assets/icons/wok.png", emoji: '🍜', slug: "wok" },
  { label: 'SOUP', icon: "/assets/icons/soup.png", emoji: '🍵', slug: "soup" },
  { label: 'OTHER', icon: "/assets/icons/fry.png", emoji: '🍟', slug: "side_dishes" },
  { label: 'BURGERS', icon: "/assets/icons/hamburger.png", emoji: '🍔', slug: "burgers" },
  { label: 'SALADS', icon: "/assets/icons/salad.png", emoji: '🥗', slug: "salads" },
  { label: 'MAKI', icon: '/assets/icons/maki.png', emoji: '🥢', slug: "maki" },
  { label: 'HOT_DRINKS', icon: '/assets/icons/coffee.png', emoji: '☕', slug: "hot_drinks" },
  { label: 'COLD_DRINKS', icon: '/assets/icons/cold_drinks.png', emoji: '🥤', slug: "cold_drinks" },
  { label: 'ALCOHOL', icon: '/assets/icons/alcohol.png', emoji: '🍺', slug: "alcohol" },
  { label: 'SASHIMI', icon: '/assets/icons/sashimi.png', emoji: '🔪', slug: "sashimi" },
  { label: 'DESERT', icon: '/assets/icons/desert.png', emoji: '🍰', slug: "desert" },
  { label: 'TUBE', icon: '/assets/icons/tube.png', emoji: '🍚', slug: "tube" }
]

export const LANG_STORE_KEY = 'lastSetLang'
