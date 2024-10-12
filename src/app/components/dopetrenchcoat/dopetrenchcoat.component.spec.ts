import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DopetrenchcoatComponent } from './dopetrenchcoat.component';

describe('DopetrenchcoatComponent', () => {
  let component: DopetrenchcoatComponent;
  let fixture: ComponentFixture<DopetrenchcoatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DopetrenchcoatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DopetrenchcoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
