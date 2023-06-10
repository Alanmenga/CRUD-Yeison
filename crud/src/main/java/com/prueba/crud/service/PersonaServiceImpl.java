package com.prueba.crud.service;

import com.prueba.crud.model.Persona;
import com.prueba.crud.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PersonaServiceImpl implements PersonaService{
    @Autowired
    private PersonaRepository personaRepository;

    @Override
    public Persona newPerson(Persona newPerson) {
        return personaRepository.save(newPerson);
    }

    @Override
    public Iterable<Persona> getAll() {
        return personaRepository.findAll();
    }

    @Override
    public Persona modifyPerson(Persona persona) {
        Optional<Persona> personaEncontrada = personaRepository.findById(persona.getNroDocumento());
        if(personaEncontrada.get() != null){
            personaEncontrada.get().setNombre(persona.getNombre());
            personaEncontrada.get().setApellido(persona.getApellido());
            personaEncontrada.get().setCorreoElectronico((persona.getCorreoElectronico()));
            return newPerson(personaEncontrada.get());
        }
        return null;
    }

    @Override
    public Boolean deletePerson(Long idPersona) {
        personaRepository.deleteById(idPersona);
        return true;
    }
}
