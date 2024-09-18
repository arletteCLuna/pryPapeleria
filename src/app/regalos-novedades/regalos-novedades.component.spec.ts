import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegalosNovedadesComponent } from './regalos-novedades.component';

describe('RegalosNovedadesComponent', () => {
  let component: RegalosNovedadesComponent;
  let fixture: ComponentFixture<RegalosNovedadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegalosNovedadesComponent]
    });
    fixture = TestBed.createComponent(RegalosNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
