package com.foundyourhome.relaciones.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.foundyourhome.relaciones.entidades.Cliente;
import com.foundyourhome.relaciones.entidades.Contacto;
//import com.foundyourhome.relaciones.entidades.Diseno;
import com.foundyourhome.relaciones.entidades.Publicador;
import com.foundyourhome.relaciones.entidades.ResumenDiseno;
import com.foundyourhome.relaciones.entidades.Suscripcion;
import com.foundyourhome.relaciones.entidades.Vivienda;
import com.foundyourhome.relaciones.servicios.ServicioRegistro;


@RestController
@RequestMapping("/api")
public class RegistroRest {
	
	@Autowired
	ServicioRegistro servicioRegistro;
	
	//REGISTRO
	@PostMapping("/registrarcliente")
	public Cliente registrarCliente(@RequestBody Cliente cliente){
		Cliente c = null;
		try {
			c = servicioRegistro.registrarCliente(cliente);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
		}
		return c;
	}
	
	@PostMapping("/registrarpublicador")
	public Publicador registrarPublicador(@RequestBody Publicador publicador){
		Publicador p = null;
		try {
			p = servicioRegistro.registrarPublicador(publicador);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
		}
		return p;
	}
	
	@PostMapping("/registrarvivienda/{codigo}")
	public Vivienda registrarVivienda(@PathVariable(value = "codigo") Long codigo, @RequestBody Vivienda vivienda){
		Vivienda v = null;
		try {
			v = servicioRegistro.registrarVivienda(codigo, vivienda);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
		}
		return v;
	}
	
	@PutMapping("registrarlistadeseocliente/{codigo}")
	public Cliente registrarListaDeseoVivienda(@RequestBody Cliente cliente,@PathVariable(value = "codigo") Long codigo) {
		Cliente c = null;
		try {
			c = servicioRegistro.registrarListaDeseoCliente(cliente, codigo);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
		}
		return c;
	}
	
	@PostMapping("/registrarsuscripcion")
	public Suscripcion registrarSuscripcion(@RequestBody Suscripcion suscripcion){
		Suscripcion s = null;
		try {
			s = servicioRegistro.registrarSuscripcion(suscripcion);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
		}
		return s;
	}
	
	@PostMapping("/registrarresumendiseno")
	public ResumenDiseno registrarResumenDiseno(@RequestBody ResumenDiseno resumenDiseno){
		ResumenDiseno rD = null;
		try {
			rD = servicioRegistro.registrarResumenDiseno(resumenDiseno);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
		}
		return rD;
	}
	
	@PostMapping("/registrarcontacto")
	public Contacto registrarContacto(@RequestBody Contacto contacto){
		Contacto c = null;
		try {
			c = servicioRegistro.registrarContacto(contacto);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
		}
		return c;
	}
	
}
