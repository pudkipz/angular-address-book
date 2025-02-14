import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './contacts/list/list.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ListComponent,
  },
  // {
  //   path: 'contacts/:id',
  //   component: 
  // },
  // {
  //   path: 'contacts/new',
  //   component:
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
