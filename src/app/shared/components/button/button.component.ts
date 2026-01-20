import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppI18nTextComponent } from '../app-i18n-text/app-i18n-text.component';
import { TLabels } from '../../../../assets/i18n/translations.enums';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [AppI18nTextComponent, NgClass],
  template: `
    <button [type]="type" [disabled]="disabled" [ngClass]="variant === 'common' ? 'comon-btn' : 'link-btn'"><i18n-text [label]="label"></i18n-text></button>
  `,
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label!:TLabels;
  @Input() disabled!: boolean;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'common' | 'link' = 'common';
  @Output() btnClick = new EventEmitter<void>();

  public actionClick(){
    this.btnClick.emit()
  }

}
