import { Routes } from '@angular/router';
import { LogInOutComponent } from './pages/log-in-out/log-in-out.component';
import { HomeComponent } from './pages/home/home/home.component';

export const routes: Routes = [
    {path:'', component:LogInOutComponent ,pathMatch:'full'},
    {path:'home', component:HomeComponent ,pathMatch:'full'}
];
