import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFatture } from './lista-fatture';

describe('ListaFatture', () => {
  let component: ListaFatture;
  let fixture: ComponentFixture<ListaFatture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaFatture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFatture);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
