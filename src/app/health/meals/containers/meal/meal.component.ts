import {Component, OnDestroy, OnInit} from '@angular/core';
import {Meal, MealsService} from '../../../shared/services/meals/meals.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-meal',
  styleUrls: ['./meal.component.scss'],
  template: `
      <div class="meal">
          <div class="meal__title">
              <h1>
                  <img src="../../../../../assets/food.svg" alt="">
                  <span *ngIf="meal$ | async as meal; else title">
                      {{meal.name ? 'Edit' : 'Create'}} meal
                  </span>
                <ng-template #title>
                    Loading...
                </ng-template>
              </h1>
          </div>
          <div *ngIf="meal$ | async as meal; else loading">
              <app-meal-form
                      (create)="addMeal($event)">
              </app-meal-form>
          </div>
          <ng-template #loading>
              <div class="message">
                  <img src="../../../../../assets/loading.svg" alt="">
                    Fetching meal...
              </div>
          </ng-template>
      </div>
  `,
})
export class MealComponent implements OnInit, OnDestroy {

  meal$: Observable<any>;
  subscription: Subscription;

  constructor(
    private mealsService: MealsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.subscription = this.mealsService.meals$.subscribe();
    this.meal$ = this.route.params.pipe(
      switchMap(params => {
        console.log('', params);
        return this.mealsService.getMeal(params.id);
      })
    );
    this.meal$.subscribe(a => {
      console.log('', a);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async addMeal(e: Meal) {
    await this.mealsService.addMeal(e);
    this.backToMeals();
  }

  backToMeals() {
    this.router.navigate(['meals']);
  }

}
