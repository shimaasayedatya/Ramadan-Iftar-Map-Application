import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketmapPage } from './basketmap.page';

describe('BasketmapPage', () => {
  let component: BasketmapPage;
  let fixture: ComponentFixture<BasketmapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketmapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
