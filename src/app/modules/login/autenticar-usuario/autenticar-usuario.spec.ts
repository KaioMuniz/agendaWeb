import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticarUsuario } from './autenticar-usuario';

describe('AutenticarUsuario', () => {
  let component: AutenticarUsuario;
  let fixture: ComponentFixture<AutenticarUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutenticarUsuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutenticarUsuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
