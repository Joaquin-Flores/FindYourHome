package com.foundyourhome.relaciones.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foundyourhome.relaciones.entidades.Usuario;


//Repositorio
public interface RepositorioUsuario extends JpaRepository<Usuario, Long>{
	
	public Usuario findByUsername(String username);

}
