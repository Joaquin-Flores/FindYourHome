package com.foundyourhome.relaciones.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.foundyourhome.relaciones.entidades.Cliente;
import com.foundyourhome.relaciones.entidades.Contacto;
import com.foundyourhome.relaciones.entidades.Publicador;
import com.foundyourhome.relaciones.entidades.ResumenDiseno;
import com.foundyourhome.relaciones.entidades.Suscripcion;
import com.foundyourhome.relaciones.entidades.Vivienda;
import com.foundyourhome.relaciones.servicios.ServicioBusqueda;
@RestController
@RequestMapping("/api")
public class BusquedaRest {
	
	@Autowired
	ServicioBusqueda servicioBusqueda;
	
	//FILTRADO
	@GetMapping("/cliente/{codigo}")
	public Cliente mostrarCliente(@PathVariable(value = "codigo") Long codigo) {
		Cliente c = null;
		try {
			c = servicioBusqueda.mostrarCliente(codigo);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No se encontro entidad");
		}
		return c;
	}
	
	@GetMapping("/publicador/{codigo}")
	public Publicador mostrarPublicador(@PathVariable(value = "codigo") Long codigo) {
		Publicador p = null;
		try {
			p = servicioBusqueda.mostrarPublicador(codigo);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No se encontro entidad");
		}
		return p;
	}
	
	@GetMapping("/vivienda/{codigo}")
	public Vivienda mostrarVivienda(@PathVariable(value = "codigo") Long codigo) {
		Vivienda v = null;
		try {
			v = servicioBusqueda.mostrarVivienda(codigo);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No se encontro entidad");
		}
		return v;
	}
	
	@GetMapping("/suscripcion/{codigo}")
	public Suscripcion mostrarSuscripcion(@PathVariable(value = "codigo") Long codigo) throws Exception{
		Suscripcion s = null;
		try {
			s = servicioBusqueda.mostrarSuscripcion(codigo);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No se encontro entidad");
		}
		return s;
	}
	
	@GetMapping("/resumendiseno/{codigo}")
	public ResumenDiseno mostrarResumenDiseno(@PathVariable(value = "codigo") Long codigo) throws Exception{
		ResumenDiseno rD = null;
		try {
			rD = servicioBusqueda.mostrarResumenDiseno(codigo);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No se encontro entidad");
		}
		return rD;
	}
	
	@GetMapping("/contacto/{codigo}")
	public Contacto mostrarContacto(@PathVariable(value = "codigo") Long codigo) throws Exception{
		Contacto c = null;
		try {
			c = servicioBusqueda.mostrarContacto(codigo);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No se encontro entidad");
		}
		return c;
	}
	
	@GetMapping("/filtrarVivienda/{ubicacion}")
	public List<Vivienda> filtrarViviendas(@PathVariable(value = "ubicacion") String ubicacion) {
		return servicioBusqueda.filtrarViviendas(ubicacion);
	}
	
	@GetMapping("/filtrarviviendaprecio/{precio}")
	public List<Vivienda> filtrarViviendaPrecio(@PathVariable(value = "precio") Double precio) {
		return servicioBusqueda.filtrarViviendaPrecio(precio);
	}
	
	@GetMapping("/filtrarviviendahabitacion/{numHabitaciones}")
	public List<Vivienda> filtrarViviendaHabitacion(@PathVariable(value = "numHabitaciones") Double numHabitaciones) {
		return servicioBusqueda.filtrarViviendasNumHabitaciones(numHabitaciones);
	}
	
	@GetMapping("/filtrarviviendabano/{numBanos}")
	public List<Vivienda> filtrarViviendaBano(@PathVariable(value = "numBanos") Double numBanos) {
		return servicioBusqueda.filtrarViviendasNumBanos(numBanos);
	}
}
