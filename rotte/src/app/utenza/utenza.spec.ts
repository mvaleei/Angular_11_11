import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Utenza } from './utenza';

describe('Utenza', () => {
  let component: Utenza;
  let fixture: ComponentFixture<Utenza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Utenza]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Utenza);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
