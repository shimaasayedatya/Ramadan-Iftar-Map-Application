import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IftarplacePage } from './iftarplace.page';

describe('IftarplacePage', () => {
  let component: IftarplacePage;
  let fixture: ComponentFixture<IftarplacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IftarplacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IftarplacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
