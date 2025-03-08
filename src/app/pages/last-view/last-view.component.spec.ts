import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastviewComponent } from './last-view.component';

describe('LastviewComponent', () => {
  let component: LastviewComponent;
  let fixture: ComponentFixture<LastviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
