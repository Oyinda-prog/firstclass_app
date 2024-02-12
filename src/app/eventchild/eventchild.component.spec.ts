import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventchildComponent } from './eventchild.component';

describe('EventchildComponent', () => {
  let component: EventchildComponent;
  let fixture: ComponentFixture<EventchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventchildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
