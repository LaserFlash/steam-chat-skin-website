import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SkinPreparationComponent } from './skin-preparation.component';

describe('SkinPreparationComponent', () => {
  let component: SkinPreparationComponent;
  let fixture: ComponentFixture<SkinPreparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkinPreparationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
