import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../settings/settings';
import { Usuario } from '../modules/api';
import { ResponceApi } from '../modules/respinceApi';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private http = inject(HttpClient);
  private apiUrl : string= appsettings.apiUrl + "/api/Registro";

  constructor() { }

  lista(){
    return this.http.get<Usuario[]>(this.apiUrl);   
  }

  Obterner(id:number){
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);   
  }

  crear(objetp:Usuario){
    return this.http.post<ResponceApi>(this.apiUrl,objetp);   
  }

  edittar(objetp:Usuario){
    return this.http.put<ResponceApi>(this.apiUrl,objetp);   
  }

  eliminar(id:number){
    return this.http.delete<ResponceApi>(`${this.apiUrl}/${id}`);   
  }

}
