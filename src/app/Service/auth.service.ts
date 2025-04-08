// src/app/Service/auth.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { appsettings } from '../settings/settings';
import { LoginRequest, LoginResponse } from '../Service/login';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl: string = appsettings.apiUrl + '/api/Login'; 

  
  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, credentials).pipe(
      catchError(error => {
        console.error('Error en el login:', error);
        return throwError(() => new Error('Error al conectar con el servidor o al autenticar el usuario.'));
      })
    );
  }
}
