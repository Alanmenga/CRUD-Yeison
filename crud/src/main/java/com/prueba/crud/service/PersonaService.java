package com.prueba.crud.service;

import com.prueba.crud.model.Persona;

public interface PersonaService {
    //Crear
    Persona newPerson(Persona newPerson);
    //Leer
    Iterable<Persona> getAll();
    //Modificar
    Persona modifyPerson(Persona persona);
    //Eliminar
    Boolean deletePerson(Long idPersona);

}
