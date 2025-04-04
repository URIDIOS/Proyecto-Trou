import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Registro {
  id?: string;
  nombre: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = 'https://localhost:7109/api/Registro';

  constructor(private http: HttpClient) {}

  getRegistros(): Observable<Registro[]> {
    return this.http.get<Registro[]>(this.apiUrl);
  }

  getRegistro(id: string): Observable<Registro> {
    return this.http.get<Registro>(`${this.apiUrl}/${id}`);
  }

  createRegistro(registro: Registro): Observable<Registro> {
    return this.http.post<Registro>(this.apiUrl, registro);
  }

  updateRegistro(id: string, registro: Registro): Observable<Registro> {
    return this.http.put<Registro>(`${this.apiUrl}/${id}`, registro);
  }

  deleteRegistro(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

