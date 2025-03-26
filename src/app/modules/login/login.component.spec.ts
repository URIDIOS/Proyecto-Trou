import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent], // Se usa aquí si NO es standalone
      imports: [] // Se asegura que FormsModule está presente
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with email and password inputs', () => {
    const emailInput = fixture.debugElement.query(By.css('input[type="email"]'));
    const passwordInput = fixture.debugElement.query(By.css('input[type="password"]'));

    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });

  it('should show an alert when submitting with empty fields', () => {
    spyOn(window, 'alert');

    component.email = '';
    component.password = '';
    fixture.detectChanges(); // Se actualiza la vista antes de llamar la función

    expect(window.alert).toHaveBeenCalledWith('Por favor, completa todos los campos.');
  });

  it('should show an alert when login is successful', () => {
    spyOn(window, 'alert');

    component.email = 'test@example.com';
    component.password = 'password123';
    fixture.detectChanges(); // Se actualiza la vista antes de llamar la función

    expect(window.alert).toHaveBeenCalledWith('Inicio de sesión exitoso');
  });
});
