import { Component, Input, EventEmitter, Output } from '@angular/core';

export type ButtonType = 'button' | 'submit';
export type ButtonColor = 'default' | 'primary';

@Component({
  selector: 'demo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  type: ButtonType = 'button';
  @Input()
  color: ButtonColor = 'default';
  @Input()
  label: string;

  @Output()
  click = new EventEmitter<Event>();

  onClick($event: Event) {
    this.click.emit($event);
  }
 }
