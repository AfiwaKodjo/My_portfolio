import { Routes } from '@angular/router';
import { HomeComponent } from '../home/Home/Home.component';
import { ContactComponent } from '../contact/Contact/Contact.component';
import { AboutComponent } from '../about/About/About.component';
import { ResumeComponent } from '../resume/Resume/Resume.component';

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
    {
        path: 'About',
        title: 'About',
        component: AboutComponent,

    },
    {
        path: 'Resume',
        title: 'Resume',
        component: ResumeComponent,

    },
];
