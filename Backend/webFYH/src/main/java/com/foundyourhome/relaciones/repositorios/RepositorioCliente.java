package com.foundyourhome.relaciones.repositorios;



import org.springframework.data.jpa.repository.JpaRepository;


import com.foundyourhome.relaciones.entidades.Cliente;


public interface RepositorioCliente extends JpaRepository<Cliente, Long>{
	public Cliente findByCorreo(String correo);
	public Cliente findByContrasena(String contrasena);
	public Cliente findByCorreoAndContrasena(String correo, String contrasena);
}
