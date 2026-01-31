import { Directive, EventEmitter, HostBinding, HostListener, output } from '@angular/core';

@Directive({
  selector: '[appDropzone]',
  standalone:true
})
export class DropzoneDirective {
  public fileDropped = output<FileList>();
  
  @HostBinding('class.drag-hover') public isHovered:boolean = false;

  @HostListener('dragover', ['$event']) dragOver(event: DragEvent){
    event.preventDefault();
    event.stopPropagation();
    this.isHovered = true
  } 
  
  @HostListener('dragenter', ['$event']) dragEnter(event: DragEvent){
    event.preventDefault()
    event.stopPropagation();
    this.isHovered = true;
  }

  @HostListener('drop', ['$event']) onDrop(event: DragEvent){
    this.isHovered = false;
    event.preventDefault();
    event.stopPropagation();
    
    const files = (event.dataTransfer?.files as FileList);
    if( files.length > 0){
    this.fileDropped.emit(files);
    }
  }

  @HostListener('dragleave', ['$event']) dragLeave(event: DragEvent){
    event.preventDefault();
    this.isHovered = false;
  }


}
