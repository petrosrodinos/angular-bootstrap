import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyTagsComponent } from './property-tags.component';

describe('PropertyTagsComponent', () => {
  let component: PropertyTagsComponent;
  let fixture: ComponentFixture<PropertyTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyTagsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
