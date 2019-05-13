import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IftarmapPage } from './iftarmap.page';

describe('IftarmapPage', () => {
  let component: IftarmapPage;
  let fixture: ComponentFixture<IftarmapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IftarmapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IftarmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
