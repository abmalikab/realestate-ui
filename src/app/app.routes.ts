import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmailComponent } from './email/email.component';
import { TableComponent } from './table/table.component';

export const routes: Routes = [    
    { path: 'home', component: HomeComponent},
    { path: 'email', component: EmailComponent},
    { path: 'table', component: TableComponent}
];
