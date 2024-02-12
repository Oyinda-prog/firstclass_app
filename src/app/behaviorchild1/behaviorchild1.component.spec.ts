import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Behaviorchild1Component } from './behaviorchild1.component';

describe('Behaviorchild1Component', () => {
  let component: Behaviorchild1Component;
  let fixture: ComponentFixture<Behaviorchild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Behaviorchild1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Behaviorchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
