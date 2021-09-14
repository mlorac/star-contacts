import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ContactsListComponent}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
