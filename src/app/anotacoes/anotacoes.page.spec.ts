import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnotacoesPage } from './anotacoes.page';

describe('AnotacoesPage', () => {
  let component: AnotacoesPage;
  let fixture: ComponentFixture<AnotacoesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnotacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
