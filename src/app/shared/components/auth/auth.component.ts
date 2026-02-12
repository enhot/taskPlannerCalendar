import { ChangeDetectionStrategy, Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { AuthService } from '../../services/auth.service';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [InputComponent,ReactiveFormsModule,ButtonComponent,MatButtonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit{
  @Output()   public statusChange = new EventEmitter<boolean>();

  public isLoginMode:boolean = false

  private authService = inject(AuthService);
  readonly dialog = inject(MatDialog);

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

    openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    this.dialog.open(ModalComponent,{
       height: '400px',
  width: '600px',
     enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  protected toggleStatus():void{
    this.isLoginMode = !this.isLoginMode

    this.statusChange.emit(this.isLoginMode)
  }

  
}
