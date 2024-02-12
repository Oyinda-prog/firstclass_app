import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinstaceComponent } from './viewinstace.component';

describe('ViewinstaceComponent', () => {
  let component: ViewinstaceComponent;
  let fixture: ComponentFixture<ViewinstaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewinstaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewinstaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
