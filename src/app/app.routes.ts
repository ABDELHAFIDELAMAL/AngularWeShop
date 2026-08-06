import { Routes } from '@angular/router';
import { AboutComponent  } from './about/about';
import { HomeComponent  } from './home/home';
import { ContactComponenet  } from './contact/contact';
import { StoreComponenet  } from './store/store';

export const routes: Routes = [
 
  { path: 'about', component: AboutComponent },

  { path: 'contact', component: ContactComponent },

  { path: 'store', component: StoreComponent },


  { path: '**', redirectTo: 'about' }
];