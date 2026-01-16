import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AppI18nTextComponent } from '../app-i18n-text/app-i18n-text.component';
import { InputComponent } from '../input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { ApiService, ILogIn } from '../../services/api.service';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [AppI18nTextComponent,InputComponent,ReactiveFormsModule,ButtonComponent, AsyncPipe],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit{
   api = inject(ApiService);
    logIn$!:any;

  public authForm: FormGroup = new FormGroup({
      userEmail: new FormControl('',Validators.required),
      userPassword: new FormControl(''),

  });

  public ngOnInit(): void {
     this.api.logIn().subscribe(
      (e) => this.logIn$ = e
     );
  }

  public authBtn(form:FormGroup){
    console.log(form.value,'dsadas')
  }
}
