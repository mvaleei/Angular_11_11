import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovaFattura } from './nuova-fattura';

describe('NuovaFattura', () => {
  let component: NuovaFattura;
  let fixture: ComponentFixture<NuovaFattura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuovaFattura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuovaFattura);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
