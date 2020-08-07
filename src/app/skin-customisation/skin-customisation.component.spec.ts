import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinCustomisationComponent } from './skin-customisation.component';

describe('SkinCustomisationComponent', () => {
  let component: SkinCustomisationComponent;
  let fixture: ComponentFixture<SkinCustomisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkinCustomisationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinCustomisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
