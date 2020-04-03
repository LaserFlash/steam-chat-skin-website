import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-steam-preview',
  templateUrl: './steam-preview.component.html',
  styleUrls: ['./steam-preview.component.css'],
})
export class SteamPreviewComponent implements OnInit {
  public styles = [];

  constructor() {}

  public ngOnInit() {}

  public updateTheme(newStyles: string[]) {
    this.styles = newStyles;
  }
}
