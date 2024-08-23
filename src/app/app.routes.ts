import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/pages/landing-page/landing-page.component';
export const routes: Routes = [
    {
        path:'auth',loadChildren:()=>import('./core/auth/auth.routes').then(m => m.authRoutes)
    },
    {
        path:'feature',loadChildren:()=>import('./features/features.routes').then(m => m.featuresRoutes)
    },
    {
        path:'',component:LandingPageComponent
    }
];
