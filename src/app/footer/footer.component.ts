import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  public affiliationNote =
    'Steam Chat Skinning is not affiliated with Valve and the Steam Logo is trademark of Valve Corporation';
  public copyright = '© 2023 Bryn Bennett (Laser)';
}
