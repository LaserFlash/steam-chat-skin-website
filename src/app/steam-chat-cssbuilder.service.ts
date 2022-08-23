import { Injectable } from '@angular/core';
import { SteamChatStyleOptionSelectable } from './steam-chat-style-options';

@Injectable({
  providedIn: 'root',
})
export class SteamChatCSSBuilderService {
  constructor() {}

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

  public generateWebkit(
    options: {
      selectedOptions: SteamChatStyleOptionSelectable[];
      baseUrl: string;
    }[]
  ): Promise<string[]> {
    return new Promise((resolve, reject) => {
      const urls = options
        .flatMap((o) => this.generateUrlArray(o.selectedOptions, o.baseUrl))
        .filter((item, i, array) => array.indexOf(item) === i)
        .filter((item) => item);

      // Now have all the required urls
      // map every url to the promise of the fetch
      const requests = urls.map((url) => fetch(url));
      Promise.all(requests)
        .then((responses) => responses)
        // Process the response getting the file content or text from it
        .then((responses) =>
          Promise.all(responses.map((r: Response) => r.text())).then(
            (content) => {
              resolve(content);
            }
          )
        );
    });
  }

  /**
   * Extract the url from css import statements
   *
   * @param imports text line in the form of a css import statement
   */
  public convertImportsToUrls(imports: string) {
    imports = imports.replace(/@import url\(/g, '');
    imports = imports.replace(/\)/g, '');
    imports = imports.replace(/\n+/g, '\n');
    return imports;
  }

  /**
   * Remove comments from css and slim text
   *
   * @param text block of css maybe with imports
   */
  public removeComments(text: string) {
    text = text.replace(/\/\*.*\*\//g, ''); // Remove comments
    text = text.replace(/\n+/g, ''); // Remove newline
    text = text.replace(/ /g, ''); // Remove spaces
    return text;
  }

  private makeImportLine(importLocation: string): string {
    return '@import url(' + importLocation + ');';
  }

  /**
   * Remove empty or non true items from the given array
   *
   * @param array array to check
   */
  private noEmpty(array: string[]): string[] {
    return array.filter((value) => value);
  }
}
