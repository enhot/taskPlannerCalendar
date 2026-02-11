import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthComponent } from '../../shared/components/auth/auth.component';

@Component({
  selector: 'app-log-in-out',
  standalone:true,
  imports: [AuthComponent],
  templateUrl: './log-in-out.component.html',
  styleUrl: './log-in-out.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInOutComponent {

}
