import { Injectable } from '@angular/core';
import { SteamChatStyleOptionSelectable } from './steam-chat-style-options';

@Injectable({
  providedIn: 'root',
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
    generatedImports.push(
      this.makeImportLine(
        'https://laserflash.tk/steam-chat-skin/src/baseTheme.css'
      )
    );
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
    generatedImports.push(
      'https://laserflash.tk/steam-chat-skin/src/baseTheme.css'
    );
    return generatedImports;
  }

  public generateWebkit(
    selectedOptions: SteamChatStyleOptionSelectable[]
  ): Promise<string[]> {
    return new Promise((resolve, reject) => {
      let urls = this.generateUrlArray(selectedOptions);

      urls = this.noEmpty(urls);
      // Now have all the required urls
      // map every url to the promise of the fetch
      const requests = urls.map((url) => fetch(url));
      const css: string[] = [];
      Promise.all(requests)
        .then((responses) => {
          return responses;
        })
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
   * @param array array to check
   */
  private noEmpty(array: string[]): string[] {
    return array.filter((value) => {
      return value;
    });
  }
}
