import { OverlayContainer } from "@angular/cdk/overlay";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatRadioModule } from "@angular/material/radio";
import { MatStepperModule } from "@angular/material/stepper";
import { MatToolbarModule } from "@angular/material/toolbar";

import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";

import { FooterComponent } from "./footer/footer.component";
import { SafePipe } from "./safe.pipe";
import { SkinCustomisationComponent } from "./skin-customisation/skin-customisation.component";
import { SteamPreviewComponent } from "./skin-customisation/steam-preview/steam-preview.component";
import { SkinExamplesComponent } from "./skin-examples/skin-examples.component";
import { SkinInstallationComponent } from "./skin-installation/skin-installation.component";
import { SkinPrerequisiteComponent } from "./skin-prerequisite/skin-prerequisite.component";

import { DeferLoadModule } from "@trademe/ng-defer-load";

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
    DeferLoadModule,
    RouterModule.forRoot([], {
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled"
    }),
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
