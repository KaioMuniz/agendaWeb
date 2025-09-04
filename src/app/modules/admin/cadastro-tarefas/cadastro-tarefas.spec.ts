import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTarefas } from './cadastro-tarefas';

describe('CadastroTarefas', () => {
  let component: CadastroTarefas;
  let fixture: ComponentFixture<CadastroTarefas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroTarefas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroTarefas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
