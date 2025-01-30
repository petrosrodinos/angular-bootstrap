import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPropertyComponent } from './property-forms.component';

describe('NewPropertyComponent', () => {
  let component: NewPropertyComponent;
  let fixture: ComponentFixture<NewPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPropertyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
