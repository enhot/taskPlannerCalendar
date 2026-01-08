import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TLabels } from '../../../../assets/i18n/translations.enums';
import {TranslateModule} from '@ngx-translate/core';


@Component({
  selector: 'i18n-text',
  standalone:true,
  imports: [TranslateModule],
  template: '<span><span [innerHTML]="label | translate : params"></span><ng-content></ng-content></span>',
  styles: [':host {display: inline}'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppI18nTextComponent {
  @Input() label!:TLabels;
  @Input() public params!: Record<string, string | number>;

}
