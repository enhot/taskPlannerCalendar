import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatIcon} from '@angular/material/icon';
import { AppI18nTextComponent } from '../app-i18n-text/app-i18n-text.component';
import { ButtonComponent } from '../button/button.component';


@Component({
  selector: 'app-modal',
  imports: [ MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule,MatIcon,AppI18nTextComponent, ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ModalComponent {

}
