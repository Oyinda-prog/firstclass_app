import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextsigninComponent } from './textsignin.component';

describe('TextsigninComponent', () => {
  let component: TextsigninComponent;
  let fixture: ComponentFixture<TextsigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextsigninComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
