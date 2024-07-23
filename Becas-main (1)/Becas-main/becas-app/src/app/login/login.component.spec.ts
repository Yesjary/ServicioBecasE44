import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, HttpClientTestingModule, RouterTestingModule],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log('Running should create test');
    expect(component).toBeTruthy();
  });

  it('should toggle password visibility', () => {
    console.log('Prueba de toggle password visibility iniciada');
    component.showPassword = false;
    const toggleLabel = { textContent: 'Mostrar contraseña' };
    
    component.togglePasswordVisibility();

    expect(component.showPassword).toBe(true);
    expect(document.getElementById('password')?.getAttribute('type')).toBe('text');
    expect(toggleLabel.textContent).toBe('Ocultar contraseña');
  });

  it('should toggle password visibility back', () => {
    console.log('Prueba de toggle password visibility back iniciada');
    component.showPassword = true;
    const toggleLabel = { textContent: 'Ocultar contraseña' };
    
    component.togglePasswordVisibility();

    expect(component.showPassword).toBe(false);
    expect(document.getElementById('password')?.getAttribute('type')).toBe('password');
    expect(toggleLabel.textContent).toBe('Mostrar contraseña');
  });

  it('should validate input', () => {
    console.log('Prueba de validación de entrada iniciada');
    const event = {
      target: {
        value: '123abc456'
      }
    };
    component.validateInput(event as any);
    expect(event.target.value).toBe('123456');
  });
});
