import { Component, OnInit } from "@angular/core";
import { Image } from "../image";

@Component({
  selector: "app-skin-examples",
  templateUrl: "./skin-examples.component.html",
  styleUrls: ["./skin-examples.component.css"]
})
export class SkinExamplesComponent implements OnInit {
  previewImages: Image[] = [
    { fileName: "assets/images/steam", alt: "Discord themed steam" },
    { fileName: "assets/images/steam", alt: "Discord themed steam" },
    { fileName: "assets/images/steam", alt: "Discord themed steam" },
  ];
  constructor() {}

  ngOnInit() {}
}
