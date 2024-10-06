import { Routes } from '@angular/router';
import { DocumentsComponent } from './components/documents/documents.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: 'documents', component: DocumentsComponent,
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: '**',
        component: LoginComponent
    }];
