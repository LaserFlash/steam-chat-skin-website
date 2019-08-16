import { Component, OnInit } from "@angular/core";
import {
  SteamChatStyleOptionSelectable,
  SteamChatCustomisationOptions
} from "src/app/steam-chat-style-options";
import { SteamChatCSSBuilderService } from "src/app/steam-chat-cssbuilder.service";
import { FileSaverService } from "src/app/file-saver.service";

@Component({
  selector: "app-skin-customisation",
  templateUrl: "./skin-customisation.component.html",
  styleUrls: ["./skin-customisation.component.css"]
})
export class SkinCustomisationComponent implements OnInit {
  customisationOptions: SteamChatStyleOptionSelectable[];

  constructor(
    public CSSBUILDER: SteamChatCSSBuilderService,
    public FILESAVER: FileSaverService
  ) {}

  ngOnInit() {
    this.customisationOptions = SteamChatCustomisationOptions as SteamChatStyleOptionSelectable[];
  }

  selectedOptions() {
    let selectedOptions = "";
    this.customisationOptions.forEach(optionType => {
      selectedOptions +=
        optionType.options[optionType.selectedOptionIndex].shortName;
    });
    return selectedOptions;
  }

  saveGeneratedCSS() {
    const imports = this.CSSBUILDER.generateImportArray(
      this.customisationOptions
    );
    this.FILESAVER.createAndSaveFromArray(imports, "friends.custom.css");
  }
}
