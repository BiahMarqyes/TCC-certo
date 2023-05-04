import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VacinaPage } from './vacina.page';

describe('VacinaPage', () => {
  let component: VacinaPage;
  let fixture: ComponentFixture<VacinaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VacinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
