import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DopeplayComponent } from './dopeplay.component';

describe('DopeplayComponent', () => {
  let component: DopeplayComponent;
  let fixture: ComponentFixture<DopeplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DopeplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DopeplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
