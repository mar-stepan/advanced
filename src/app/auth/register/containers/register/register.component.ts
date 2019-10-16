import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {Router} from '@angular/router';

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

            <div class="error" *ngIf="error">
                {{ error }}
            </div>
        </app-auth-form>
    </div>
  `
})
export class RegisterComponent implements OnInit {

  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async registerUser(event: FormGroup) {
    const {email, password} = event.value;
    try {
      await this.authService.createUser(email, password);
      this.router.navigate(['/']);
    } catch (e) {
      this.error = e.message;
    }
  }

}
