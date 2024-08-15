import { Routes } from '@angular/router';
import path from 'path';
import { RegisterComponent } from './pages/register/register.component';

export const authRoutes: Routes = [
    {path:'register',component:RegisterComponent}
];
