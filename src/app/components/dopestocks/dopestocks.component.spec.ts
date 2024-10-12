import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DopestocksComponent } from './dopestocks.component';

describe('DopestocksComponent', () => {
  let component: DopestocksComponent;
  let fixture: ComponentFixture<DopestocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DopestocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DopestocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
