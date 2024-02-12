import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Behaviorchild2Component } from './behaviorchild2.component';

describe('Behaviorchild2Component', () => {
  let component: Behaviorchild2Component;
  let fixture: ComponentFixture<Behaviorchild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Behaviorchild2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Behaviorchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
