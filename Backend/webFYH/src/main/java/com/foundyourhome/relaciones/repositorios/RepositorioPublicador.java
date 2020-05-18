package com.foundyourhome.relaciones.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foundyourhome.relaciones.entidades.Publicador;

public interface RepositorioPublicador extends JpaRepository<Publicador, Long>{
	
}
