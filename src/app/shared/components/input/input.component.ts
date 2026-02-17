import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, inject, Injector, input, OnInit, signal } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule, NgControl } from '@angular/forms';
import { AppI18nTextComponent } from '../app-i18n-text/app-i18n-text.component';
import { TLabels } from '../../../../assets/i18n/translations.enums';
import { TranslateModule } from '@ngx-translate/core';


interface ControlValueAccessor {
  writeValue(obj: any): void;                   // модель -> вид
  registerOnChange(fn: any): void;              // вид -> модель (изменение)
  registerOnTouched(fn: any): void;             // вид -> модель (blur)
  setDisabledState?(isDisabled: boolean): void; // disabled
}

@Component({
  selector: 'app-input',
  standalone:true,
  imports: [CommonModule,FormsModule, AppI18nTextComponent,TranslateModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }]
})
export class InputComponent implements ControlValueAccessor, OnInit{
  public id = input<string>('app-input'); 
  public label = input.required<TLabels>();
  public type = input<string>('text');
  public placeholder = input<TLabels | string>('');
  public value = signal<string>('');
  public disabled = signal<boolean>(false);
  //public control = input.required<FormControl>();


  public onChange: (value: string) => void = () => {};
  public onTouched: () => void = () => {};

  public ngControl: NgControl | null = null;
  private injector = inject(Injector);
  

  constructor() { 

  } 
  

  public ngOnInit(): void {
    this.ngControl = this.injector.get(NgControl, null, { self: true });
  }

  public onInput(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value;
    this.value.set(newValue);
    this.onChange(newValue);
  }

  public writeValue(value: string | null): void {
    this.value.set(value ?? "");
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

}
