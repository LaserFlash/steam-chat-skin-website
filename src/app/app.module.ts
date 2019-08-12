import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { OverlayContainer } from "@angular/cdk/overlay";

import { AppComponent } from "./app.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { FooterComponent } from "./footer/footer.component";
import { SkinExamplesComponent } from "./skin-examples/skin-examples.component";
import { SkinInstallationComponent } from "./skin-installation/skin-installation.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SkinExamplesComponent,
    SkinInstallationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add("my-app-theme");
  }
}
