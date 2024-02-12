import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventparentComponent } from './eventparent.component';

describe('EventparentComponent', () => {
  let component: EventparentComponent;
  let fixture: ComponentFixture<EventparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventparentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
