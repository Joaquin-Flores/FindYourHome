package com.foundyourhome.relaciones.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foundyourhome.relaciones.entidades.Contacto;

public interface RepositorioResumenDiseno extends JpaRepository<Contacto, Long>{

}
