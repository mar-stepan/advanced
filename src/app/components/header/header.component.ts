import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./header.component.scss'],
  template: `
      <div class="app-header">
          <div class="wrapper">
              <img src="../../../assets/logo.svg">
              <div class="app-header__user-info"
                   *ngIf="user?.authenticated">
                  <span (click)="logoutUser()"></span>
              </div>
          </div>
      </div>
  `,
})
export class HeaderComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  logout = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  logoutUser() {
    this.logout.emit();
  }

}
