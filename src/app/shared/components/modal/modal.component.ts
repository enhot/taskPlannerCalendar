import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
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
import { UploadFacadeService } from '../../services/upload-facade.service';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-modal',
  imports: [ MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule,MatIcon,AppI18nTextComponent, ButtonComponent, DropzoneDirective,AsyncPipe],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ModalComponent {
  public currentFile: File | null = null;
  public previewUrl: string  | null = null;
  
  public fileReader = new FileReader();

constructor(protected uploadFacade: UploadFacadeService) {}

public onFileInputChange(file:Event){
        const element = file.currentTarget as HTMLInputElement;
        this.uploadFacade.onFiles(element.files)
        element.value = '';
}

}
