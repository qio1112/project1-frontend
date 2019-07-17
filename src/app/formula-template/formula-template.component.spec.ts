import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaTemplateComponent } from './formula-template.component';

describe('FormulaTemplateComponent', () => {
  let component: FormulaTemplateComponent;
  let fixture: ComponentFixture<FormulaTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
