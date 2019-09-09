import { Component, OnInit } from "@angular/core";
import { Image } from "../image";

@Component({
  selector: "app-skin-examples",
  templateUrl: "./skin-examples.component.html",
  styleUrls: ["./skin-examples.component.css"]
})
export class SkinExamplesComponent implements OnInit {
  public previewImages: Image[] = [
    {
      fileName: "assets/images/steamSquircleDiscord",
      alt: "Theme using the steam default colours"
    },
    {
      fileName: "assets/images/darkSquircleDiscord",
      alt: "Theme using the a darker colour pallet"
    },
    {
      fileName: "assets/images/discordRoundDiscord",
      alt: "Theme using the discord colours"
    },
    { fileName: "assets/images/lightRoundOutline", alt: "A white theme" }
  ];
  constructor() {}

  public ngOnInit() {
    this.previewImages = this.shuffle(this.previewImages);
  }

  /**
   * Shuffles array in place.
   * @param Image[] a items An array containing the items.
   */
  public shuffle(a: Image[]) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
