import { Routes } from '@angular/router';
import { Home } from '../app/home/home';
import { Form } from '../app/form/form';

export const routes: Routes = [
    { path : 'home' , component : Home } ,
    { path : 'form' , component : Form }
];
