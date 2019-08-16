import { Injectable } from "@angular/core";
import * as FileSaver from "file-saver";

@Injectable({
  providedIn: "root"
})
export class FileSaverService {
  constructor() {}

  createAndSaveFromArray(lines: string[], fileName: string) {
    const blob = new Blob(lines, {
      type: "text/css;charset=utf-8",
      endings: "native"
    });
    FileSaver.saveAs(blob, fileName);
  }
}
