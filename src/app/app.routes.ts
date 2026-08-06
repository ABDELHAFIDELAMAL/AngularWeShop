import { Routes } from '@angular/router';

// My Routes
import { AboutComponent } from './about/about';
import { HomeComponent } from './home/home';
import { ContactComponent } from './contact/contact';
import { StoreComponent } from './store/store';

export const routes: Routes = [
  { 
    path: '',
     redirectTo: 'store',
      pathMatch: 'full' 
  },
  { 
    path: 'home',
     component: HomeComponent 
    },
  { 
    path: 'about',
     component: AboutComponent 
  },
  { 
    path: 'contact',
    component: ContactComponent 
  },
  { 
    path: 'store',
     component: StoreComponent 
    },
  {
    path: '**',
     redirectTo: 'store'
  }
];
