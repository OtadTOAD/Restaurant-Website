import { Routes } from '@angular/router';
import { Landing } from './components/landing/landing';
import { Error } from './components/error/error';

export const routes: Routes = [
    {
        path: "",
        component: Landing
    },
    {
        path: "**",
        component: Error
    }
];
