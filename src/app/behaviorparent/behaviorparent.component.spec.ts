import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorparentComponent } from './behaviorparent.component';

describe('BehaviorparentComponent', () => {
  let component: BehaviorparentComponent;
  let fixture: ComponentFixture<BehaviorparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviorparentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehaviorparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
