import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinExamplesComponent } from './skin-examples.component';

describe('SkinExamplesComponent', () => {
  let component: SkinExamplesComponent;
  let fixture: ComponentFixture<SkinExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
