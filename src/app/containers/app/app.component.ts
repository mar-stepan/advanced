import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template:  `
        <div>
            Hello Angular!
            <div class="wrapper">
                <router-outlet></router-outlet>
            </div>
        </div>
  `
})
export class AppComponent {
  title = 'advanced';
}
