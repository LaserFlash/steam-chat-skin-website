import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinInstallationComponent } from './skin-installation.component';

describe('SkinInstallationComponent', () => {
  let component: SkinInstallationComponent;
  let fixture: ComponentFixture<SkinInstallationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinInstallationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
