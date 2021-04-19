import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCreditNoteComponent } from './tax-credit-note.component';

describe('TaxCreditNoteComponent', () => {
  let component: TaxCreditNoteComponent;
  let fixture: ComponentFixture<TaxCreditNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxCreditNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxCreditNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
