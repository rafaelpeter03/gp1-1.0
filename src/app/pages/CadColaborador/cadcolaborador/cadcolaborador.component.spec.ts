import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadcolaboradorComponent } from './cadcolaborador.component';

describe('CadcolaboradorComponent', () => {
  let component: CadcolaboradorComponent;
  let fixture: ComponentFixture<CadcolaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadcolaboradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadcolaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
