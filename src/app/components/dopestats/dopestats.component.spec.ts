import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DopestatsComponent } from './dopestats.component';

describe('DopestatsComponent', () => {
  let component: DopestatsComponent;
  let fixture: ComponentFixture<DopestatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DopestatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DopestatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
