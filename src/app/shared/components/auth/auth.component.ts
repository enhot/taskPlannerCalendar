import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { AuthFacadeService } from './auth.facade/auth-facade.service';
import { IUserLogin, IUserRegistr } from '../../interfaces/IUsersApi';
import { Actions, ofType } from '@ngrx/effects';
import { AuthAction } from '../../store/auth/common/auth-actions';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [InputComponent,ReactiveFormsModule,ButtonComponent,MatButtonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AuthComponent  {
  @Output() public statusChange = new EventEmitter<boolean>();

  public isLoginMode:boolean = false;
  public userIsAuth: boolean = false;

  readonly dialog = inject(MatDialog);

  public authForm: FormGroup = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      name:  new FormControl('',[Validators.required, Validators.minLength(3)]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
  });

constructor(private authFacade :AuthFacadeService) {
  authFacade.authSuccess$.pipe(
    takeUntilDestroyed()
  ).subscribe(() => this.authForm.reset())
}

  public authBtn(form:FormGroup){
    if (form.valid && this.isLoginMode) {
      this.authFacade.logIn(form.value  as IUserLogin);
    }else{
      this.authFacade.signUp(form.value as IUserRegistr);
    }
      console.log(this.userIsAuth,'ss')

    
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
    const nameControl = this.authForm.get('name');

    this.isLoginMode = !this.isLoginMode
    this.statusChange.emit(this.isLoginMode);

    if (this.isLoginMode) {
    nameControl?.disable(); 
  } else {
    nameControl?.enable(); 
  }
  }

  
}
