import { Routes } from '@angular/router';
import { AboutComponent } from './about/about';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'about', component: AboutComponent },

  { path: '**', redirectTo: 'about' }
];