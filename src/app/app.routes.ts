import { Routes } from '@angular/router';
import { authRoutes } from './core/auth/auth.routes';

export const routes: Routes = [
    {
        path:'auth',loadChildren:()=>import('./core/auth/auth.routes').then(m => m.authRoutes)
    }
];
