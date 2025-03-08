import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAditionComponent } from './new-addition.component';

describe('NewAditionComponent', () => {
  let component: NewAditionComponent;
  let fixture: ComponentFixture<NewAditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAditionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
