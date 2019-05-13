import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftplacemodifyPage } from './giftplacemodify.page';

describe('GiftplacemodifyPage', () => {
  let component: GiftplacemodifyPage;
  let fixture: ComponentFixture<GiftplacemodifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftplacemodifyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftplacemodifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
