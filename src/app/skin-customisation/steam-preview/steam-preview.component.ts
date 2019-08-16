import { Component, OnInit, Inject } from "@angular/core";


@Component({
  selector: "app-steam-preview",
  templateUrl: "./steam-preview.component.html",
  styleUrls: ["./steam-preview.component.css"]
})
export class SteamPreviewComponent implements OnInit {
  styles = [
    "https://laserflash.tk/steam-chat-skin/src/css/customisable/avatarStyle/roundAvatar.css",
    "https://laserflash.tk/steam-chat-skin/src/css/customisable/avatarStatus/discordStatus.css",
    "https://laserflash.tk/steam-chat-skin/src/css/customisable/colourSet/discordColours.css"
  ];

  constructor() {}

  ngOnInit() {

  }

  updateTheme(newStyles: string[]) {
    this.styles = newStyles;
  }
}
