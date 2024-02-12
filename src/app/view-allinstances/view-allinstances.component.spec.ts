import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllinstancesComponent } from './view-allinstances.component';

describe('ViewAllinstancesComponent', () => {
  let component: ViewAllinstancesComponent;
  let fixture: ComponentFixture<ViewAllinstancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllinstancesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllinstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
