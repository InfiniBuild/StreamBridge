import { Routes } from '@angular/router';
import path from 'path';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { OtpComponent } from './pages/otp/otp.component';
import { ForPassComponentComponent } from './pages/for-pass-component/for-pass-component.component';

export const authRoutes: Routes = [
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'otp',component:OtpComponent},
    {path:'forgotPassword',component:ForPassComponentComponent}
];
