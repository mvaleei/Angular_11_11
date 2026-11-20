import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ruoli } from './ruoli';

describe('Ruoli', () => {
  let component: Ruoli;
  let fixture: ComponentFixture<Ruoli>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ruoli]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ruoli);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
