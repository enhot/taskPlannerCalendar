import { Component } from '@angular/core';
import { AppI18nTextComponent } from '../../../../shared/components/app-i18n-text/app-i18n-text.component';
import { AuthComponent } from '../../../../shared/components/auth/auth.component';

@Component({
  selector: 'app-auth-or-regist',
  standalone:true,
  imports: [AppI18nTextComponent,AuthComponent],
  templateUrl: './auth-or-regist.component.html',
  styleUrl: './auth-or-regist.component.scss',
})
export class AuthOrRegistComponent {
public isLoginMode: boolean = false;

public statusChange(val:boolean){
  this.isLoginMode = val
}
}
