import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {
    path: 'clients',
    component: ClientsComponent,
  },
  {
    path: 'client/:id',
    component: ClientComponent,
  },
  {
    path: 'newclient',
    component: ClientComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
