import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

import {Store} from '../../../../../store';

import {AuthService} from '../../../../auth/shared/services/auth/auth.service';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';

export interface Meal {
  name: string;
  ingredients: string[];
  timestamp: number;
  $key: string;
  $exists: () => boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  meals$ = this.db.list(`meals/${this.uid}`).valueChanges();

  // .do(next => this.store.set('meals', next));

  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {
    this.meals$.subscribe(a => {
      this.store.set('meals', a);
    });
  }

  get uid() {
    return this.authService.user.uid;
  }

  getMeal(key: string) {
    if (!key) {
      return of(true);
    }
    return this.store.select<Meal[]>('meals')
      .pipe(
        filter(Boolean),
        map((meals: any) => meals.find((meal: Meal) => meal.$key === key))
      );
  }

  addMeal(meal: Meal) {
    return this.db.list(`meals/${this.uid}`)
      .push(meal);
  }

  removeMeal(key: string) {
    return this.db.list(`meals/${this.uid}`)
      .remove(key);
  }

}
