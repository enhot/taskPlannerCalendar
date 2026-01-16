import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AppI18nTextComponent } from '../app-i18n-text/app-i18n-text.component';
import { InputComponent } from '../input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [AppI18nTextComponent,InputComponent,ReactiveFormsModule,ButtonComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit{
  private apiService = inject(ApiService);


  public authForm: FormGroup = new FormGroup({
      userEmail: new FormControl('',Validators.required),
      userPassword: new FormControl(''),

  });

  public ngOnInit(): void {
    this.apiService.getUserInfo().subscribe((e) => console.log(e,'data')
    )
  }

  public authBtn(form:FormGroup){
    this.apiService.setNewUser(form.value).subscribe(
      (e) => console.log('addd',e)
    )
  }
}
