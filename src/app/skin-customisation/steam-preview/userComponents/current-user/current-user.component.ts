import { Component, OnInit, Input } from '@angular/core';
import utils from '../utils';
import { User, Status } from '../users';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css'],
})
export class CurrentUserComponent implements OnInit {
  @Input() user: User;
  constructor() {}
  ngOnInit(): void {}

  public statusToDisplayName(status: Status[]) {
    return utils.statusToDisplayName(status);
  }

  public statusToClass(status: Status[]) {
    return utils.statusToClassNames(status);
  }
}
