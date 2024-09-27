import { Routes } from '@angular/router';
import { DocumentsComponent } from './components/documents/documents.component';
import { LandingComponent } from './components/landing/landing.component';

export const routes: Routes = [{
    path: 'documents', component: DocumentsComponent,
}, {
    path: '**',
    component: LandingComponent
}];
