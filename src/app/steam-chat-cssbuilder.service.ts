import { Injectable } from '@angular/core';
import { SteamChatStyleOptionSelectable } from './steam-chat-style-options';

@Injectable({
  providedIn: 'root',
})
export class SteamChatCSSBuilderService {
  public generateImportArray(
    selectedOptions: SteamChatStyleOptionSelectable[],
    baseUrl: string
  ): string[] {
    return [
      this.makeImportLine(baseUrl),
      ...selectedOptions.map((optionInfo: SteamChatStyleOptionSelectable) =>
        this.makeImportLine(
          optionInfo.options[optionInfo.selectedOptionIndex].importLine
        )
      ),
    ];
  }

  public generateUrlArray(
    selectedOptions: SteamChatStyleOptionSelectable[],
    baseUrl
  ): string[] {
    return [
      baseUrl,
      ...selectedOptions
        .map(
          (optionInfo: SteamChatStyleOptionSelectable) =>
            optionInfo.options[optionInfo.selectedOptionIndex].importLine
        )
        .filter((url) => url),
    ];
  }

  private makeImportLine(importLocation: string): string {
    return '@import url(' + importLocation + ');';
  }
}
