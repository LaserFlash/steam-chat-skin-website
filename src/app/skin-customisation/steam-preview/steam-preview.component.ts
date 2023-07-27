import { Component } from '@angular/core';
import {
  currentUser,
  offlineUsers,
  onlineUsers,
  ingameUsers,
  User,
} from './userComponents/users';

@Component({
  selector: 'app-steam-preview',
  templateUrl: './steam-preview.component.html',
  styleUrls: ['./steam-preview.component.css'],
})
export class SteamPreviewComponent {
  public styles = [];
  public CURRENT_USER: User = currentUser;
  public ONLINE_USERS: User[] = onlineUsers;
  public OFFLINE_USERS: User[] = offlineUsers;
  public INGAME_USERS: User[] = ingameUsers;
  public FAV_USERS: User[] = [
    this.ONLINE_USERS[0],
    ...this.INGAME_USERS,
    this.OFFLINE_USERS[0],
  ];

  public updateTheme(newStyles: string[]) {
    this.styles = newStyles;
  }
}
