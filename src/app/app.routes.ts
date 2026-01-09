import { Routes } from '@angular/router';
import { LogInOutComponent } from './pages/log-in-out/log-in-out.component';

export const routes: Routes = [
    {path:'', component:LogInOutComponent ,pathMatch:'full'}
];
