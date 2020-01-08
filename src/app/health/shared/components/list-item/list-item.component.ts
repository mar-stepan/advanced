import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./list-item.component.scss'],
  template: `
      <div class="list-item">
          <a [routerLink]="getRoute(item)">
              <p class="list-item__name">{{item.name}} </p>
              <p class="list-item__ingredients">
                <span>
                    {{item.ingredients}}
                </span>
              </p>
          </a>

          <div
                  class="list-item__delete"
                  *ngIf="toggled">
              <p>Delete item?</p>
              <button class="confirm"
                      type="button"
                      (click)="removeItem()">
                  Yes
              </button>
              <button class="cancel"
                      type="button"
                      (click)="toggle()">
                  No
              </button>
          </div>

          <button class="trash"
                  type="button"
                  (click)="toggle()">
              <img src="../../../../../assets/remove.svg" alt="">
          </button>
      </div>
  `,
})
export class ListItemComponent implements OnInit {

  toggled = false;

  @Input() item: any;

  @Output()
  remove = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  removeItem() {
    console.log('12321', );
    this.remove.emit(this.item);
  }

  toggle() {
    this.toggled = !this.toggled;
  }

  getRoute(item: any) {
    console.log('', item);
    return [`../meals`, item.key];
  }
}
