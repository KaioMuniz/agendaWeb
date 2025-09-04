import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoTarefas } from './edicao-tarefas';

describe('EdicaoTarefas', () => {
  let component: EdicaoTarefas;
  let fixture: ComponentFixture<EdicaoTarefas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdicaoTarefas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicaoTarefas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
