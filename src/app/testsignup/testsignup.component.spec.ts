import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsignupComponent } from './testsignup.component';

describe('TestsignupComponent', () => {
  let component: TestsignupComponent;
  let fixture: ComponentFixture<TestsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
