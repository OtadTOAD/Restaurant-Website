import { Routes } from '@angular/router';
import { Landing } from './components/landing/landing';
import { Error } from './components/error/error';
import { Products } from './components/products/products';
import { AboutUs } from './components/about-us/about-us';
import { ContactUs } from './components/contact-us/contact-us';
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
        path: 'about_us',
        component: AboutUs
    },
    {
        path: 'contact_us',
        component: ContactUs
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
