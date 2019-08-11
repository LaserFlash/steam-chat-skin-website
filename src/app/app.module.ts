import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { OverlayContainer } from "@angular/cdk/overlay";

import { AppComponent } from "./app.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";

import { FooterComponent } from "./footer/footer.component";
import { SkinExamplesComponent } from './skin-examples/skin-examples.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, SkinExamplesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add("my-app-theme");
  }
}
