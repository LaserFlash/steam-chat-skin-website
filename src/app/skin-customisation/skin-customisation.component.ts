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
  styleUrls: ["./skin-customisation.component.css"]
})
export class SkinCustomisationComponent implements OnInit {
  customisationOptions: SteamChatStyleOptionSelectable[];

  @ViewChild(SteamPreviewComponent, { static: true })
  steamPreview: SteamPreviewComponent;

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

  /**
   * Generate css theme for linux or macOS
   *  Both of these cannot have any import statements
   */
  saveGeneratedCSSUnixReady() {
    const urls = this.CSSBUILDER.generateUrlArray(this.customisationOptions);
    this.downloadFiles(urls, "").then((css: string) => {
      const cssArray = [css];
      console.log(1);
      this.FILESAVER.createAndSaveFromArray(cssArray, "webkit.css");
    });
  }

  /**
   * Download css files & build into one file
   * @param urls list of urls to the css files
   * @param css string to build up
   */
  downloadFiles(urls: string[], css: string) {
    return new Promise((resolve, reject) => {
      // map every url to the promise of the fetch
      const requests = urls.map(url => fetch(url));
      // Promise.all waits until all jobs are resolved
      Promise.all(requests)
        .then(responses => {
          return responses;
        })
        // map array of responses into array of strings to read their content
        .then(responses =>
          Promise.all(responses.map((r: Response) => r.text())).then(
            content => {
              const subRequests = content.map(text => {
                text = this.removeComments(text);
                if (text.startsWith("@")) {
                  text = this.convertImportsToUrls(text);
                  const subUrls = text.split(";");
                  subUrls.pop();
                  return this.downloadFiles(subUrls, css);
                } else {
                  css += text;
                  return css;
                }
              });
              // The last sub request has the fully built css file
              resolve(subRequests[subRequests.length -1]);
            }
          )
        );
    });
  }

  /**
   * Remove comments from css and slim text
   * @param text block of css maybe with imports
   */
  removeComments(text: string) {
    text = text.replace(/\/\*.*\*\//g, "");
    text = text.replace(/\n/g, " ");
    text = text.replace(/ /, "");
    text = text.replace(/\n+/g, "\n");
    return text;
  }

  /**
   * Extract the url from css import statements
   * @param imports text line in the form is a css import statement
   */
  convertImportsToUrls(imports: string) {
    imports = imports.replace(/@import url\(/g, "");
    imports = imports.replace(/\)/g, "");
    imports = imports.replace(/\n+/g, "\n");
    imports = imports.replace(/ +/g, " ");
    return imports;
  }
}
