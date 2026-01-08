import { Component } from '@angular/core';
import { AppI18nTextComponent } from './shared/components/app-i18n-text/app-i18n-text.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ AppI18nTextComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
