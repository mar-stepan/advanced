import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutsComponent } from './containers/workouts/workouts.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

export const ROUTER: Routes = [
  {path: '', component: WorkoutsComponent}
];

@NgModule({
  declarations: [
    WorkoutsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTER)
  ]
})
export class WorkoutsModule { }
