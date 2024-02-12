import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewinstanceComponent } from './newinstance.component';

describe('NewinstanceComponent', () => {
  let component: NewinstanceComponent;
  let fixture: ComponentFixture<NewinstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewinstanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewinstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
