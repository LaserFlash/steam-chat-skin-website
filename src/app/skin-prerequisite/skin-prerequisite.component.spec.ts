import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SkinPrerequisiteComponent } from "./skin-prerequisite.component";

describe("SkinPrerequisiteComponent", () => {
  let component: SkinPrerequisiteComponent;
  let fixture: ComponentFixture<SkinPrerequisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkinPrerequisiteComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinPrerequisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
