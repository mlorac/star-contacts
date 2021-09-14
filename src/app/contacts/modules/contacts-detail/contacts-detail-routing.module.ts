import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';

const routes: Routes = [
  { path: '', component: ContactsDetailComponent}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
