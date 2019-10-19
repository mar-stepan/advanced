import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Store} from '../store';
import {RouterModule, Routes} from '@angular/router';

// feature modules
import {AuthModule} from './auth/auth.module';
import {HealthModule} from './health/health.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components
import {HeaderComponent} from './components/header/header.component';
import {NavComponent} from './components/nav/nav.component';



export const ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'schedule'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(ROUTES),
    HealthModule
  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
