import { OverlayContainer } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { SafePipe } from './safe.pipe';
import { SkinCustomisationComponent } from './skin-customisation/skin-customisation.component';
import { SteamPreviewComponent } from './skin-customisation/steam-preview/steam-preview.component';
import { SkinExamplesComponent } from './skin-examples/skin-examples.component';
import { SkinInstallationComponent } from './skin-installation/skin-installation.component';
import { SkinPreparationComponent } from './skin-preparation/skin-preparation.component';

import { DeferLoadModule } from '@trademe/ng-defer-load';
import { CurrentUserComponent } from './skin-customisation/steam-preview/userComponents/current-user/current-user.component';
import { FriendComponent } from './skin-customisation/steam-preview/userComponents/friend/friend.component';
import { MiniProfileComponent } from './skin-customisation/steam-preview/userComponents/mini-profile/mini-profile.component';
import { QuickAccessComponent } from './skin-customisation/steam-preview/userComponents/quick-access/quick-access.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SkinExamplesComponent,
    SkinPreparationComponent,
    SkinCustomisationComponent,
    SteamPreviewComponent,
    SafePipe,
    SkinInstallationComponent,
    CurrentUserComponent,
    FriendComponent,
    MiniProfileComponent,
    QuickAccessComponent,
  ],
  imports: [
    DeferLoadModule,
    RouterModule.forRoot([], {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
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
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('my-app-theme');
  }
}
