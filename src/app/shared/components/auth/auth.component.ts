import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AppI18nTextComponent } from '../app-i18n-text/app-i18n-text.component';
import { InputComponent } from '../input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [AppI18nTextComponent,InputComponent,ReactiveFormsModule,ButtonComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit{
  private authService = inject(AuthService);


  public authForm: FormGroup = new FormGroup({
      userEmail: new FormControl('',Validators.required),
      userPassword: new FormControl(''),

  });

  public ngOnInit(): void {

  }

  public authBtn(form:FormGroup){
if (form.valid) {
    this.authService.signUp(form.value).subscribe({
      next: () => {
        console.log('Пользователь успешно создан в Auth и Firestore!');
      },
      error: (err) => console.error('Ошибка регистрации:', err)
    });
  }
  }
}
