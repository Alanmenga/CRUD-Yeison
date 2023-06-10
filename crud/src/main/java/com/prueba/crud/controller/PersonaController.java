package com.prueba.crud.controller;

import com.prueba.crud.model.Persona;
import com.prueba.crud.service.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/persona")
public class PersonaController {
    @Autowired
    private PersonaService personaService;

    @PostMapping("/nuevo")
    public Persona newPersona(@RequestBody Persona newPersona) { return personaService.newPerson(newPersona); }

    @GetMapping("/mostrar")
    public Iterable<Persona> getAll() {
        return personaService.getAll();
    }

    @PostMapping("/modificar")
    public Persona modifyPersona(@RequestBody Persona persona) { return personaService.modifyPerson(persona); }

    @PostMapping(value = "/{id}")
    public Boolean deletePersona(@PathVariable(value = "id") Long id) { return personaService.deletePerson(id); }
}
