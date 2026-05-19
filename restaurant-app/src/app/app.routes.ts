import { ExtraOptions, Routes } from '@angular/router';
import { Landing } from './components/landing/landing';
import { Error } from './components/error/error';
import { Products } from './components/products/products';
import { TermsConditions } from './components/terms-conditions/terms-conditions';

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
        path: 'terms_conditions',
        component: TermsConditions
    },
    {
        path: "**",
        component: Error
    },
];