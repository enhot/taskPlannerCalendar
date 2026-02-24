import { ChangeDetectionStrategy, Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { AuthService } from '../../services/auth.service';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Store } from '@ngrx/store';
import { AuthAction } from '../../store/auth/common/auth-actions';
import { IUserLogin, IUserRegistr } from '../../interfaces/IUsersApi';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [InputComponent,ReactiveFormsModule,ButtonComponent,MatButtonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit{
  @Output() public statusChange = new EventEmitter<boolean>();

  public store = inject(Store)
  public isLoginMode:boolean = false

  private authService = inject(AuthService);
  readonly dialog = inject(MatDialog);

  public authForm: FormGroup = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      name:  new FormControl('',[Validators.required, Validators.minLength(3)]),
      password: new FormControl('',[Validators.required,Validators.minLength(4)]),


  });

  public ngOnInit() {

  }

  public authBtn(form:FormGroup){
if (form.valid && this.isLoginMode) {
  this.store.dispatch(AuthAction.logIn.requested({usersInfo: form.value as IUserLogin}));
  console.log('Данные из формы:', form.getRawValue());
  }else{
      this.store.dispatch(AuthAction.signUp.requested({usersInfo: form.value as IUserRegistr}))
  }
  }

  public logIn(form:FormGroup){
    console.log("log in")
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

    this.statusChange.emit(this.isLoginMode);
const nameControl = this.authForm.get('name');
    if (this.isLoginMode) {
    nameControl?.disable(); 
  } else {
    nameControl?.enable(); 
  }
  }

  
}
