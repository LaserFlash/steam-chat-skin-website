import { Component } from "@angular/core";
import { HostListener, Inject } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "steam-chat-skin-website";
  screenHeight: number;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.screenHeight = window.innerHeight;
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number == 0) {
      document.querySelector("body").style.cssText = "--visibility: hidden";
    } else if (number > this.screenHeight * 0.3) {
      document.querySelector("body").style.cssText =
        "--visibility: visible";
    }
    console.log("scroll" + number)
    console.log("height" +  this.screenHeight)
  }
}
