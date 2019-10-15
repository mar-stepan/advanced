import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  template: `
        <div>
            <app-auth-form (submitted)="loginUser($event)">
                <h1>Login</h1>
                <a routerLink="/auth/register">Not register</a>
                <button type="submit">
                    Login
                </button>
            </app-auth-form>
        </div>
  `
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginUser(event: FormGroup): void {
    console.log(event.value);
  }

}
