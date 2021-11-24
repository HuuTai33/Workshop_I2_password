import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleAuthenticationComponent } from './double-authentication.component';

describe('DoubleAuthenticationComponent', () => {
  let component: DoubleAuthenticationComponent;
  let fixture: ComponentFixture<DoubleAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleAuthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
