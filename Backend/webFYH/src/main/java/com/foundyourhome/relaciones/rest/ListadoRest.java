package com.foundyourhome.relaciones.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foundyourhome.relaciones.entidades.Cliente;
import com.foundyourhome.relaciones.entidades.Publicador;
import com.foundyourhome.relaciones.entidades.Suscripcion;
import com.foundyourhome.relaciones.entidades.Vivienda;
import com.foundyourhome.relaciones.servicios.ServicioListado;

@RestController
@RequestMapping("/api")
public class ListadoRest {
	
	@Autowired
	ServicioListado servicioListado;
	
	@GetMapping("/clientes")
	public List<Cliente> obtenerClientes(){
		return servicioListado.obtenerClientes();
	}	
	
	@GetMapping("/publicadores")
	public List<Publicador> obtenerPublicadores(){
		return servicioListado.obtenerPublicadores();
	}	
	
	@GetMapping("/viviendas")
	public List<Vivienda> obtenerViviendas(){
		return servicioListado.obtenerViviendas();
	}	
	
	@GetMapping("/suscripciones")
	public List<Suscripcion> obtenerSuscripciones(){
		return servicioListado.obtenerSuscripciones();
	}
}
