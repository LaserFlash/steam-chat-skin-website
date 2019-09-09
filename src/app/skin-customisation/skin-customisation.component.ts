import { Component, OnInit, ViewChild } from "@angular/core";
import { FileSaverService } from "src/app/file-saver.service";
import { SteamChatCSSBuilderService } from "src/app/steam-chat-cssbuilder.service";
import {
  SteamChatCustomisationOptions,
  SteamChatStyleOptionSelectable
} from "src/app/steam-chat-style-options";
import { SteamPreviewComponent } from "./steam-preview/steam-preview.component";

@Component({
  selector: "app-skin-customisation",
  templateUrl: "./skin-customisation.component.html",
  styleUrls: ["./skin-customisation.component.css"]
})
export class SkinCustomisationComponent implements OnInit {
  public customisationOptions: SteamChatStyleOptionSelectable[];

  @ViewChild(SteamPreviewComponent, { static: true })
  public steamPreview: SteamPreviewComponent;

  constructor(
    public CSSBUILDER: SteamChatCSSBuilderService,
    public FILESAVER: FileSaverService
  ) {}

  public ngOnInit() {
    this.customisationOptions = SteamChatCustomisationOptions as SteamChatStyleOptionSelectable[];
    this.updatePreview();
  }

  public selectedOptions() {
    let selectedOptions = "";
    this.customisationOptions.forEach(optionType => {
      selectedOptions +=
        optionType.options[optionType.selectedOptionIndex].shortName;
    });
    return selectedOptions;
  }

  public updatePreview() {
    const newStyles = this.CSSBUILDER.generateUrlArray(
      this.customisationOptions
    );

    this.steamPreview.updateTheme(newStyles);
  }

  public saveGeneratedCSS() {
    const imports = this.CSSBUILDER.generateImportArray(
      this.customisationOptions
    );
    this.FILESAVER.createAndSaveFromArray(imports, "friends.custom.css");
  }

  /**
   * Generate css theme for linux or macOS
   *  Both of these cannot have any import statements
   */
  public saveGeneratedCSSUnixReady() {
    this.CSSBUILDER.generateWebkit(this.customisationOptions).then(css => {
      this.FILESAVER.createAndSaveFromArray(css, "webkit.css");
    });
  }
}
