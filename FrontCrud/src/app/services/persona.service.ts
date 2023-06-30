import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  rutaGlobal = 'http://localhost:8080/persona/'

  constructor(private http: HttpClient) { }

  //Crear persona
  crearPersona(persona: Persona){
    return this.http.post<Persona>(this.rutaGlobal + 'nuevo', persona, {
      observe: 'response'
    })
  }

  //Mostrar personas
  mostrarPersonas(){ 
    return this.http.get<Persona[]>(this.rutaGlobal + 'mostrar')
  }

  //Actualizar persona
  actualizarPersona(persona: Persona){
    return this.http.post<Persona>(this.rutaGlobal + 'modificar', persona, {
      observe: 'response'
    })
  }

  //Eliminar persona
  eliminarPersona(nroDocumento: number){
    return this.http.post<Boolean>(this.rutaGlobal + nroDocumento, {
      observe: 'response'
    })
  }
}
