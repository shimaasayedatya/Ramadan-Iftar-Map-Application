import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftplacePage } from './giftplace.page';

describe('GiftplacePage', () => {
  let component: GiftplacePage;
  let fixture: ComponentFixture<GiftplacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftplacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftplacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
