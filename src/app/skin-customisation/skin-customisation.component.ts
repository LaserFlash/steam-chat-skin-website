import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { FileSaverService } from 'src/app/file-saver.service';
import { SteamChatCSSBuilderService } from 'src/app/steam-chat-cssbuilder.service';
import {
  SteamChatCustomisationOptions,
  SteamChatStyleOptionSelectable,
  friendsBaseImport,
} from 'src/app/steam-chat-style-options';
import { SteamPreviewComponent } from './steam-preview/steam-preview.component';

@Component({
  selector: 'app-skin-customisation',
  templateUrl: './skin-customisation.component.html',
  styleUrls: ['./skin-customisation.component.css'],
})
export class SkinCustomisationComponent implements AfterViewInit, OnInit {
  @ViewChild(SteamPreviewComponent, { static: true })
  public steamPreview: SteamPreviewComponent;
  public customisationOptions: SteamChatStyleOptionSelectable[];

  constructor(
    public CSSBUILDER: SteamChatCSSBuilderService,
    public FILESAVER: FileSaverService
  ) {}

  public ngOnInit() {
    this.customisationOptions =
      SteamChatCustomisationOptions as SteamChatStyleOptionSelectable[];
  }

  public ngAfterViewInit() {
    this.updatePreview();
  }

  public selectedOptions() {
    let selectedOptions = '';
    this.customisationOptions.forEach((optionType) => {
      selectedOptions +=
        optionType.options[optionType.selectedOptionIndex].shortName;
    });
    return selectedOptions;
  }

  public updatePreview() {
    const newStyles = this.CSSBUILDER.generateUrlArray(
      this.customisationOptions,
      friendsBaseImport
    );

    this.steamPreview.updateTheme(newStyles);
  }

  public saveGeneratedCSS() {
    const friendsImports = this.CSSBUILDER.generateImportArray(
      this.customisationOptions,
      friendsBaseImport
    );

    this.FILESAVER.createAndSaveFromArray(friendsImports, 'friends.custom.css');
  }
}
