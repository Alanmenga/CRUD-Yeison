package com.prueba.crud.repository;

import com.prueba.crud.model.Persona;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonaRepository extends JpaRepository<Persona, Long>{
}
