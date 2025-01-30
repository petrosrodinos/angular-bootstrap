import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageBoxComponent } from './percentage-box.component';

describe('PercentageBoxComponent', () => {
  let component: PercentageBoxComponent;
  let fixture: ComponentFixture<PercentageBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentageBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
