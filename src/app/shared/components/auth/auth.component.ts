import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AppI18nTextComponent } from '../app-i18n-text/app-i18n-text.component';
import { InputComponent } from '../input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
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

  public isLoginMode: boolean = false;


  public authForm: FormGroup = new FormGroup({
      userEmail: new FormControl('',[Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      userName: new FormControl('',[Validators.required, Validators.minLength(3)]),
      userPassword: new FormControl('',[Validators.required,Validators.minLength(4)]),

  });

  public ngOnInit(): void {

  }

  public authBtn(form:FormGroup){
    console.log('sdas')
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
