import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppI18nTextComponent } from '../app-i18n-text/app-i18n-text.component';
import { TLabels } from '../../../../assets/i18n/translations.enums';

@Component({
  selector: 'app-button',
  imports: [AppI18nTextComponent],
  template: `
    <button [type]="type" [disabled]="disabled"><i18n-text [label]="label"></i18n-text></button>
  `,
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label!:TLabels;
  @Input() disabled!: boolean;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Output() btnClick = new EventEmitter<void>();

  public actionClick(){
    this.btnClick.emit()
  }

}
