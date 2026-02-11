import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthComponent } from '../../shared/components/auth/auth.component';
import { Store } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Actions } from '@ngrx/effects';
import {  IncrementAction, loadIncrement } from '../../shared/store/common/common-action';

@Component({
  selector: 'app-log-in-out',
  standalone:true,
  imports: [AuthComponent],
  templateUrl: './log-in-out.component.html',
  styleUrl: './log-in-out.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInOutComponent {
constructor(private store:Store){
    this.store.dispatch(IncrementAction())

}
}
