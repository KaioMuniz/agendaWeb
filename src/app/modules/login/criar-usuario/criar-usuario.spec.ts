import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarUsuario } from './criar-usuario';

describe('CriarUsuario', () => {
  let component: CriarUsuario;
  let fixture: ComponentFixture<CriarUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarUsuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarUsuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
