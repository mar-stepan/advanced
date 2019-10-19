import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MealsComponent} from './containers/meals/meals.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

export const ROUTER: Routes = [
  {path: '', component: MealsComponent}
];

@NgModule({
  declarations: [
    MealsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTER)
  ]
})
export class MealsModule { }
