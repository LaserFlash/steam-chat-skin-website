import { Injectable } from "@angular/core";
import { SteamChatStyleOptionSelectable } from "./steam-chat-style-options";

@Injectable({
  providedIn: "root"
})
export class SteamChatCSSBuilderService {
  constructor() {}

  public generateImportArray(
    selectedOptions: SteamChatStyleOptionSelectable[]
  ): string[] {
    const generatedImports: string[] = [];
    selectedOptions.forEach((optionInfo: SteamChatStyleOptionSelectable) => {
      generatedImports.push(
        this.makeImportLine(
          optionInfo.options[optionInfo.selectedOptionIndex].importLine
        )
      );
    });
    return generatedImports;
  }

  public generateUrlArray(
    selectedOptions: SteamChatStyleOptionSelectable[]
  ): string[] {
    const generatedImports: string[] = [];
    selectedOptions.forEach((optionInfo: SteamChatStyleOptionSelectable) => {
      const url = optionInfo.options[optionInfo.selectedOptionIndex].importLine;
      if (url) {
        generatedImports.push(url);
      }
    });
    generatedImports.push("https://laserflash.tk/steam-chat-skin/src/baseTheme.css");
    return generatedImports;
  }

  private makeImportLine(importLocation: string): string {
    return "@import url(" + importLocation + ");";
  }
}
