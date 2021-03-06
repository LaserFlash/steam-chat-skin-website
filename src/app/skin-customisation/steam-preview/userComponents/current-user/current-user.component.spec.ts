import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CurrentUserComponent } from './current-user.component';

describe('CurrentUserComponent', () => {
  let component: CurrentUserComponent;
  let fixture: ComponentFixture<CurrentUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentUserComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
