import { Routes } from '@angular/router';
import { HomeComponent } from '../home/Home/Home.component';
import { ContactComponent } from '../contact/Contact/Contact.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent,

    },
    {
        path: 'Contact',
        title: 'Contact',
        component: ContactComponent,

    },
];
