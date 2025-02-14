import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [ListComponent, ViewComponent, AddComponent],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule,
  ],
  exports: [ListComponent, ViewComponent, AddComponent]
})
export class ContactsModule { }
