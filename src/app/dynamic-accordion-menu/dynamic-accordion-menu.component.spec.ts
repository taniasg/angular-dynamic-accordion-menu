import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAccordionMenuComponent } from './dynamic-accordion-menu.component';

describe('DynamicAccordionMenuComponent', () => {
  let component: DynamicAccordionMenuComponent;
  let fixture: ComponentFixture<DynamicAccordionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicAccordionMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicAccordionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
