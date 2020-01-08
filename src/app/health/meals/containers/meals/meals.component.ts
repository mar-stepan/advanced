import {Component, OnDestroy, OnInit} from '@angular/core';
import {Meal, MealsService} from '../../../shared/services/meals/meals.service';
import {Observable, Subscription} from 'rxjs';
import {Store} from '../../../../../store';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-meals',
  styleUrls: ['./meals.component.scss'],
  template: `
      <div class="meals">
          <div class="meals__title">
              <h1>
                  <img src="../../../../../assets/food.svg" alt="">
                  Your meals
              </h1>
              <a class="btn__add"
                 [routerLink]="['../meals/new']">
                  <img src="../../../../../assets/add-white.svg" alt="">
                  New meal
              </a>
          </div>
          <div *ngIf="meals$ | async as meals; else loading;">
              <div class="message" *ngIf="!meals.length">
                  <img src="../../../../../assets/face.svg" alt="">
                  No meals, add a new meal to start
              </div>
              <app-list-item
                      *ngFor="let meal of meals"
                      [item]="meal"
                      (remove)="removeMeal($event)">
              </app-list-item>
          </div>
          <ng-template #loading>
              <div class="message">
                  <img src="../../../../../assets/loading.svg" alt="">
                  Fetching meals...
              </div>
          </ng-template>
      </div>
  `,
})
export class MealsComponent implements OnInit, OnDestroy {

  meals$: Observable<Meal[]>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private mealsService: MealsService
  ) {
  }

  ngOnInit() {
    this.meals$ = this.store.select<Meal[]>('meals');
    this.subscription = this.mealsService.meals$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  removeMeal(event: Meal) {
    console.log('', event);
    this.mealsService.removeMeal(event.$key);
  }

}
