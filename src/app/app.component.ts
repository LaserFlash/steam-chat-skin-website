import { Component, OnInit } from "@angular/core";
import { HostListener, Inject } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Steam Chat Skinning";

  ngOnInit(): void {
    this.onWindowScroll();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    /* Hide top toolbar when the main page title is on page */
    let screenHeight = window.innerHeight;
    let scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (scrollPosition <= screenHeight * 0.45) {
      document.querySelector("body").style.cssText = "--visibility: hidden";
    } else {
      document.querySelector("body").style.cssText = "--visibility: visible";
    }
  }
}
