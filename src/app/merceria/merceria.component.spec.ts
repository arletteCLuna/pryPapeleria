import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerceriaComponent } from './merceria.component';

describe('MerceriaComponent', () => {
  let component: MerceriaComponent;
  let fixture: ComponentFixture<MerceriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerceriaComponent]
    });
    fixture = TestBed.createComponent(MerceriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
