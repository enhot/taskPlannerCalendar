import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { CommonAction } from './shared/store/common/common-action';
import { Elanguage } from '../assets/i18n/translations.enums';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public store = inject(Store);
  constructor(){
    this.store.dispatch(CommonAction.appStart.requested());
    this.store.dispatch(CommonAction.changeLanguage({lang:Elanguage.UA}))

  }
}
