import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MychatsignupComponent } from './mychatsignup.component';

describe('MychatsignupComponent', () => {
  let component: MychatsignupComponent;
  let fixture: ComponentFixture<MychatsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MychatsignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MychatsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
