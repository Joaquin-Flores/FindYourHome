package com.foundyourhome.relaciones.repositorios;


import org.springframework.data.jpa.repository.JpaRepository;

import com.foundyourhome.relaciones.entidades.Plano;


public interface RepositorioPlano extends JpaRepository<Plano, Long> {

}
