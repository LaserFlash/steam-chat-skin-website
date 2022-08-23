import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkinExamplesComponent } from './skin-examples.component';

describe('SkinExamplesComponent', () => {
  let component: SkinExamplesComponent;
  let fixture: ComponentFixture<SkinExamplesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SkinExamplesComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
