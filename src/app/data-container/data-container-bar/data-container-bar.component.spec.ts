import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataContainerBarComponent } from './data-container-bar.component';

describe('DataContainerBarComponent', () => {
  let component: DataContainerBarComponent;
  let fixture: ComponentFixture<DataContainerBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataContainerBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataContainerBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
