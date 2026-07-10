import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { Employes } from './pages/employes/employes';
import { Bulletins } from './pages/bulletins/bulletins';
import { Login } from './pages/login/login';


export const routes: Routes = [
  // Redirection vers le tableau de bord
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  // Pages principales
  { path: 'dashboard', component: Dashboard },
  { path: 'employes', component: Employes },
  { path: 'bulletins', component: Bulletins },
  { path: 'login', component: Login },

  // Route inconnue
  { path: '**', redirectTo: 'dashboard' }
];