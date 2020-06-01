package com.foundyourhome.relaciones.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.foundyourhome.relaciones.entidades.Cliente;
import com.foundyourhome.relaciones.entidades.Publicador;
import com.foundyourhome.relaciones.entidades.Suscripcion;
import com.foundyourhome.relaciones.entidades.Vivienda;
import com.foundyourhome.relaciones.servicios.ServicioMantenimiento;

@RestController
@RequestMapping("/api")
public class MantenimientoRest {
	
	@Autowired
	ServicioMantenimiento servicioMantenimiento;
	
	@PutMapping("/actualizarcliente/{codigo}")
	public Cliente actualizarDatosCliente(@PathVariable(value = "codigo") Long codigo, @RequestBody Cliente cliente) throws Exception{
		Cliente c = null;
		try {
			c = servicioMantenimiento.actualizarDatosCliente(codigo, cliente);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
		}
		return c;
	}
	
	@PutMapping("/actualizarpublicador/{codigo}")
	public Publicador actualizarDatosPublicador(@PathVariable(value = "codigo") Long codigo, @RequestBody Publicador publicador) throws Exception{
		Publicador p = null;
		try {
			p = servicioMantenimiento.actualizarDatosPublicador(codigo, publicador);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
		}
		return p;
	}
	
	@PutMapping("/actualizarsuscripcion/{codigo}")
	public Suscripcion actualizarSuscripcion(@PathVariable(value = "codigo") Long codigo, @RequestBody Suscripcion suscripcion) throws Exception{
		Suscripcion s = null;
		try {
			s = servicioMantenimiento.actualizarSuscripcion(codigo, suscripcion);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
		}
		return s;
	}
	
	@PutMapping("/actualizarvivienda/{codigo}")
	public Vivienda actualizarVivienda(@PathVariable(value = "codigo") Long codigo, @RequestBody Vivienda vivienda) throws Exception{
		Vivienda v = null;
		try {
			v = servicioMantenimiento.actualizarVivienda(codigo, vivienda);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
		}
		return v;
	}
	
	@DeleteMapping("/eliminarvivienda/{codigo}")
	public Vivienda eliminarVivienda(@PathVariable(value = "codigo") Long codigo) throws Exception {
		Vivienda v = null;
		try {
			v = servicioMantenimiento.eliminarVivienda(codigo);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
		}
		return v;
	}
	
	@DeleteMapping("/eliminarpublicador/{codigo}")
	public Publicador eliminarPublicador(@PathVariable(value = "codigo") Long codigo) throws Exception {
		Publicador p = null;
		try {
			p = servicioMantenimiento.eliminarPublicador(codigo);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
		}
		return p;
	}
	
	@DeleteMapping("/eliminarsuscripcion/{codigo}")
	public Suscripcion eliminarSuscripcion(@PathVariable(value = "codigo") Long codigo) throws Exception {
		Suscripcion s = null;
		try {
			s = servicioMantenimiento.eliminarSuscripcion(codigo);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
		}
		return s;
	}
}
