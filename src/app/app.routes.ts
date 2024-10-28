import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OperacionesComponent } from './components/operaciones/operaciones.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'pages/home',
        pathMatch: 'full' 
    },
    {
        path: 'pages/home',
        component: HomeComponent
    },
    {
        path: 'components/operaciones',
        component: OperacionesComponent   
    }
];
