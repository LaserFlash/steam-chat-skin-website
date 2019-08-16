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

  private makeImportLine(importLocation: string): string {
    return "@import url(" + importLocation + ");";
  }
}
