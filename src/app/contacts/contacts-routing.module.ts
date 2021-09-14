import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/contacts-list/contacts-list.module').then(m => m.ContactsListModule)},
  { path: 'detail', loadChildren: () => import('./modules/contacts-detail/contacts-detail.module').then(m => m.ContactsDetailModule) }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
