import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './contacts/list/list.component';
import { ViewComponent } from './contacts/view/view.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ListComponent,
  },
  {
    path: 'contacts/:id',
    component: ViewComponent,
  },
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
