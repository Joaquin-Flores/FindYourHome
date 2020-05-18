package com.foundyourhome.relaciones.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foundyourhome.relaciones.entidades.Contacto;

public interface RepositorioContacto extends JpaRepository<Contacto, Long>{

}
