import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {Router} from '@angular/router';

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
                <div class="error" *ngIf="error">
                    {{ error }}
                </div>
            </app-auth-form>
        </div>
  `
})
export class LoginComponent implements OnInit {

  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async loginUser(event: FormGroup) {
    const {email, password} = event.value;
    try {
      await this.authService.loginUser(email, password);
      this.router.navigate(['/']);
    } catch (e) {
      this.error = e.message;
    }
  }

}
