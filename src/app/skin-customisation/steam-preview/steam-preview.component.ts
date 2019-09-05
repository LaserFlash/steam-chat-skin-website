import { Component, OnInit, Inject } from "@angular/core";


@Component({
  selector: "app-steam-preview",
  templateUrl: "./steam-preview.component.html",
  styleUrls: ["./steam-preview.component.css"]
})
export class SteamPreviewComponent implements OnInit {
  styles = [];

  constructor() {}

  ngOnInit() {

  }

  updateTheme(newStyles: string[]) {
    this.styles = newStyles;
  }
}
