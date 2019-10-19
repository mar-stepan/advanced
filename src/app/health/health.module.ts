import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

export const ROUTES: Routes = [
  {path: 'meals', loadChildren: './meals/meals.module#MealsModule'},
  {path: 'schedule', loadChildren: './schedule/schedule.module#ScheduleModule'},
  {path: 'workouts', loadChildren: './workouts/workouts.module#WorkoutsModule'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class HealthModule { }
