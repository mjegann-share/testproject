import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCreditNotesComponent } from './tax-credit-notes.component';

describe('TaxCreditNotesComponent', () => {
  let component: TaxCreditNotesComponent;
  let fixture: ComponentFixture<TaxCreditNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxCreditNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxCreditNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
