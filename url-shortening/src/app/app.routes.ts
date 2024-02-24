import { Routes } from '@angular/router';
import { MasterComponent } from './layout/master/master.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: MasterComponent,
        children: [{ path: '', component: HomeComponent}],
    },
];
