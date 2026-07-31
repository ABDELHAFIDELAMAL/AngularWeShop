import { Routes } from '@angular/router';
import { Home } from '../app/home/home';
import { Store } from '../app/store/store';
import { Form } from '../app/form/form';

export const routes: Routes = [
    { path : 'home' , component : Home } ,
    { path : 'store' , component : Store } ,
    { path : 'form' , component : Form } 
];
