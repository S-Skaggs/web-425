import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ViewServiceComponent } from './view-service/view-service.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'service/:id',
    component: ViewServiceComponent
  }
];
