package com.foundyourhome.relaciones.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.foundyourhome.relaciones.entidades.Vivienda;


public interface RepositorioVivienda extends JpaRepository<Vivienda, Long>{
	@Query ("select t from Vivienda t where t.ubicacion =:ubicacion")
	List<Vivienda> filtrarVivienda (@Param("ubicacion") String ubicacion);
}
