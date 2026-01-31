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
import { DropzoneDirective } from '../../directives/dropzone.directive';


@Component({
  selector: 'app-modal',
  imports: [ MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule,MatIcon,AppI18nTextComponent, ButtonComponent, DropzoneDirective],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ModalComponent {



    public  getFile(val:FileList):void {
      console.log(val,'sdasd')
    }

}
