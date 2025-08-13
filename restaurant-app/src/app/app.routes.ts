import { Routes } from '@angular/router';
import { Landing } from './components/landing/landing';
import { Error } from './components/error/error';
import { Products } from './components/products/products';

export const routes: Routes = [
    {
        path: "",
        component: Landing
    },
    {
        path: 'products/:type',
        component: Products
    },
    {
        path: "**",
        component: Error
    },
];
