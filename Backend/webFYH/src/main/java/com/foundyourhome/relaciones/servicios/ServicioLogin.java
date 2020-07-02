package com.foundyourhome.relaciones.servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foundyourhome.relaciones.entidades.Cliente;
import com.foundyourhome.relaciones.entidades.Publicador;
import com.foundyourhome.relaciones.repositorios.RepositorioCliente;
import com.foundyourhome.relaciones.repositorios.RepositorioPublicador;

@Service
public class ServicioLogin {
	@Autowired
	RepositorioCliente repositorioCliente;
	
	@Autowired
	RepositorioPublicador repositorioPublicador;
	
	public Cliente loginCliente(Cliente cliente) throws Exception {
		String correo = cliente.getCorreo();
		String contrasena = cliente.getContrasena();
		Cliente objCliente = null;
		if(correo != null && contrasena != null) {
			objCliente = repositorioCliente.findByCorreoAndContrasena(correo, contrasena);
		}
		if(objCliente == null) {
			throw new Exception("Este usuario no existe");
		}
		return objCliente;
	}
	
	
	public Publicador loginPublicador(Publicador publicador) throws Exception {
		String correo = publicador.getCorreo();
		String contrasena = publicador.getContrasena();
		Publicador objPublicador = null;
		if(correo != null && contrasena != null) {
			objPublicador = repositorioPublicador.findByCorreoAndContrasena(correo, contrasena);
		}
		if(objPublicador == null) {
			throw new Exception("Este usuario no existe");
		}
		return objPublicador;
	}
	
}
