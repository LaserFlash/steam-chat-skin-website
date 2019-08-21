import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  affiliationNote =
    "Steam Chat Skinning is not affiliated with Valve and the Steam Logo is trademark of Valve Corporation";
  copyright = "© 2019 Bryn Bennett";
  constructor() {}

  ngOnInit() {}
}
