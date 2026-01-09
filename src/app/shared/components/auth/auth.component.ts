import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppI18nTextComponent } from '../app-i18n-text/app-i18n-text.component';
import { InputComponent } from '../input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [AppI18nTextComponent,InputComponent,ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  public authForm: FormGroup = new FormGroup({
      userEmail: new FormControl('',Validators.required),
      userPassword: new FormControl(''),

  });

  public authBtn(form:FormGroup){
    console.log(form.value,'dsadas')
  }
}
