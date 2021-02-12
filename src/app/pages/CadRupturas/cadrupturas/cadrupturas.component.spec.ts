import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadrupturasComponent } from './cadrupturas.component';

describe('CadrupturasComponent', () => {
  let component: CadrupturasComponent;
  let fixture: ComponentFixture<CadrupturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadrupturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadrupturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
