import { Component, ViewChild, OnInit } from "@angular/core";
import {
  SteamChatStyleOptionSelectable,
  SteamChatCustomisationOptions
} from "src/app/steam-chat-style-options";
import { SteamChatCSSBuilderService } from "src/app/steam-chat-cssbuilder.service";
import { FileSaverService } from "src/app/file-saver.service";
import { SteamPreviewComponent } from "./steam-preview/steam-preview.component";

@Component({
  selector: "app-skin-customisation",
  templateUrl: "./skin-customisation.component.html",
  styleUrls: ["./skin-customisation.component.css"],
})
export class SkinCustomisationComponent implements OnInit {
  customisationOptions: SteamChatStyleOptionSelectable[];

  @ViewChild(SteamPreviewComponent,{static: true}) steamPreview: SteamPreviewComponent;

  constructor(
    public CSSBUILDER: SteamChatCSSBuilderService,
    public FILESAVER: FileSaverService
  ) {}

  ngOnInit() {
    this.customisationOptions = SteamChatCustomisationOptions as SteamChatStyleOptionSelectable[];
    this.updatePreview();
  }

  selectedOptions() {
    let selectedOptions = "";
    this.customisationOptions.forEach(optionType => {
      selectedOptions +=
        optionType.options[optionType.selectedOptionIndex].shortName;
    });
    return selectedOptions;
  }

  updatePreview() {
    const newStyles = this.CSSBUILDER.generateUrlArray(
      this.customisationOptions
    );

    this.steamPreview.updateTheme(newStyles);
  }

  saveGeneratedCSS() {
    const imports = this.CSSBUILDER.generateImportArray(
      this.customisationOptions
    );
    this.FILESAVER.createAndSaveFromArray(imports, "friends.custom.css");
  }
}
