import { HomePage } from './Features/Pages/home/home-page/home-page';
import { Routes } from '@angular/router';
import { MainLayout } from './Features/Layout/main-layout/main-layout';
import { AboutPage } from './Features/Pages/about/about-page/about-page';
import { ContactPage } from './Features/Pages/contact-us/contact-page/contact-page';
import { ProjectDetails } from './Features/Pages/project-details/project-details';
import { ServicePage } from './Features/Pages/service-page/service-page';

export const routes: Routes = [

    
    {path: '', component: MainLayout, children: [
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', component: HomePage, title: 'Home'},
            {path: 'about', component: AboutPage, title: 'About'},
            {path: 'contact', component: ContactPage, title: 'Contact-us'},
            {path: 'projects/:slug', component: ProjectDetails, title: 'Project Details'},
            {path: 'services/:serviceId', component: ServicePage, title: 'Service Details'},

            // Specific service routes for better SEO 
            { 
                path: 'swimming-pools', 
                redirectTo: 'services/custom-swimming-pools', 
                pathMatch: 'full' 
            },
            { 
                path: 'water-features', 
                redirectTo: 'services/water-features-fountains', 
                pathMatch: 'full' 
            },
            { 
                path: 'landscaping', 
                redirectTo: 'services/soft-hard-landscape', 
                pathMatch: 'full' 
            },
            { 
                path: 'specialty-services', 
                redirectTo: 'services/environmental-services', 
                pathMatch: 'full' 
            }
        ] 
    },
    
    {path: '**', redirectTo: 'home'}
];
