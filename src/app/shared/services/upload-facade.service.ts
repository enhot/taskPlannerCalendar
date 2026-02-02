import { ChangeDetectorRef, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadFacadeService {
    private _previewUrl$ = new BehaviorSubject<string | null>(null);
    public previewUrl$ = this._previewUrl$.asObservable();
    private _currentFile$ = new BehaviorSubject<File | null>(null)
    public currentFile$ = this._currentFile$.asObservable();

    public  onFiles(file:FileList | null ): void {
      if(file?.length === 0 || !file) return ;

      const fileReader = new FileReader()

      const takeFirstImg:File = file[0];

      if (!file[0].type.startsWith('image/')) return ;

      fileReader.onload = () => {
        this._previewUrl$.next(fileReader.result as string);
      this._currentFile$.next(takeFirstImg)
          }

      fileReader.readAsDataURL(takeFirstImg);

    fileReader.onerror = (err) => {
      console.error('Не подходящий формат', err)
    }
    }

}
