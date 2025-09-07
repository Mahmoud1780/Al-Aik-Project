import { HomePage } from './Features/Pages/home/home-page/home-page';
import { Routes } from '@angular/router';
import { MainLayout } from './Features/Layout/main-layout/main-layout';
import { AboutPage } from './Features/Pages/about/about-page/about-page';
import { ContactPage } from './Features/Pages/contact-us/contact-page/contact-page';

export const routes: Routes = [

    
    {path: '', component: MainLayout, children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: HomePage, title: 'Home'},
        {path: 'about', component: AboutPage, title: 'About'},
        {path: 'contact', component: ContactPage, title: 'Contact'}
    ] },
    
    {path: '**', redirectTo: '/main'}
];
