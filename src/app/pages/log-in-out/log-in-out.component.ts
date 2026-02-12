import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthOrRegistComponent } from './component/auth-or-regist/auth-or-regist.component';

@Component({
  selector: 'app-log-in-out',
  standalone:true,
  imports: [AuthOrRegistComponent],
  templateUrl: './log-in-out.component.html',
  styleUrl: './log-in-out.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInOutComponent {

}
