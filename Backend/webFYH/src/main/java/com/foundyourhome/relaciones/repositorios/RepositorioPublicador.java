package com.foundyourhome.relaciones.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foundyourhome.relaciones.entidades.Publicador;

public interface RepositorioPublicador extends JpaRepository<Publicador, Long>{
	public Publicador findByCorreo(String correo);
	public Publicador findByContrasena(String contrasena);
	public Publicador findByCorreoAndContrasena(String correo, String contrasena);
}
