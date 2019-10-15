import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  styleUrls: ['./register.component.scss'],
  template: `
    <div>
        <app-auth-form (submitted)="registerUser($event)">
            <h1>Register</h1>
            <a routerLink="/auth/login">Already have a account?</a>
            <button type="submit">
                Create account
            </button>
        </app-auth-form>
    </div>
  `
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerUser(event: FormGroup): void {
    console.log(event.value);
  }

}
