package com.foundyourhome.relaciones.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foundyourhome.relaciones.entidades.Role;

public interface RepositorioRole extends JpaRepository<Role, Long> {
	public Role findByNombre(String nombre);
}
