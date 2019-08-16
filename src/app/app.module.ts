import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { OverlayContainer } from "@angular/cdk/overlay";

import { AppComponent } from "./app.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatStepperModule } from "@angular/material/stepper";
import { MatRadioModule } from "@angular/material/radio";
import { MatDividerModule } from "@angular/material/divider";

import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";

import { FooterComponent } from "./footer/footer.component";
import { SkinExamplesComponent } from "./skin-examples/skin-examples.component";
import { SkinPrerequisiteComponent } from "./skin-prerequisite/skin-prerequisite.component";
import { SkinCustomisationComponent } from "./skin-customisation/skin-customisation.component";
import { SteamPreviewComponent } from "./skin-customisation/steam-preview/steam-preview.component";
import { SafePipe } from "./safe.pipe";
import { SkinInstallationComponent } from "./skin-installation/skin-installation.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SkinExamplesComponent,
    SkinPrerequisiteComponent,
    SkinCustomisationComponent,
    SteamPreviewComponent,
    SafePipe,
    SkinInstallationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatRadioModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add("my-app-theme");
  }
}
