import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class FileSaverService {
  constructor() {}

  /**
   * Given an array produce produce a download output
   *
   * @param lines content to save as a file
   * @param fileName name of the produced file
   */
  public createAndSaveFromArray(items: string[], fileName: string) {
    const blob = new File(items, fileName, {
      type: 'text/plain;charset=utf-8',
    });
    FileSaver.saveAs(blob, fileName);
  }
}
