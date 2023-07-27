import { Component, Input } from '@angular/core';
import utils from '../utils';
import { User, Status } from '../users';

@Component({
  selector: 'app-quick-access',
  templateUrl: './quick-access.component.html',
  styleUrls: ['./quick-access.component.css'],
})
export class QuickAccessComponent {
  @Input() users: User[];

  public statusToDisplayName(status: Status[]) {
    return utils.statusToDisplayName(status);
  }

  public statusToClass(status: Status[]) {
    return utils.statusToClassNames(status);
  }

  public isAway(status: Status[]) {
    return status.includes('away') && !status.includes('offline');
  }
}
