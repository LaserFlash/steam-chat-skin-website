import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SteamPreviewComponent } from "./steam-preview.component";

describe("SteamPreviewComponent", () => {
  let component: SteamPreviewComponent;
  let fixture: ComponentFixture<SteamPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SteamPreviewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteamPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
