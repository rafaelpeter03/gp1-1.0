import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadfranquiaComponent } from './cadfranquia.component';

describe('CadfranquiaComponent', () => {
  let component: CadfranquiaComponent;
  let fixture: ComponentFixture<CadfranquiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadfranquiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadfranquiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
