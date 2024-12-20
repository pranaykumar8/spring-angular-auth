import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstafeedComponent } from './instafeed.component';

describe('InstafeedComponent', () => {
  let component: InstafeedComponent;
  let fixture: ComponentFixture<InstafeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstafeedComponent]
    });
    fixture = TestBed.createComponent(InstafeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
