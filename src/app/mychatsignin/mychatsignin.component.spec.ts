import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MychatsigninComponent } from './mychatsignin.component';

describe('MychatsigninComponent', () => {
  let component: MychatsigninComponent;
  let fixture: ComponentFixture<MychatsigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MychatsigninComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MychatsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
