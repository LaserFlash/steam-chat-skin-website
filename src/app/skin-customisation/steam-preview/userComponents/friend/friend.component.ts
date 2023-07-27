import { Component, Input } from '@angular/core';
import utils from '../utils';
import { User, Status } from '../users';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css'],
})
export class FriendComponent {
  @Input() user: User;

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
