import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyPanelsComponent } from './property-panels.component';

describe('PropertyPanelsComponent', () => {
  let component: PropertyPanelsComponent;
  let fixture: ComponentFixture<PropertyPanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyPanelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
