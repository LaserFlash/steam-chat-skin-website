import { Injectable } from "@angular/core";
import * as FileSaver from "file-saver";

@Injectable({
  providedIn: "root"
})
export class FileSaverService {
  constructor() {}

  createAndSaveFromArray(lines: string[], fileName: string) {
    const blob = new File(lines, fileName, {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, fileName);
  }
}
