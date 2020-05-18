package com.foundyourhome.relaciones.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.foundyourhome.relaciones.entidades.Cliente;
//import com.foundyourhome.relaciones.entidades.Diseno;
import com.foundyourhome.relaciones.entidades.Publicador;
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
	
	//NO SE COMO HACER ESA WVD
	/*@PostMapping("/registrarvivienda/{codigo}/registrarDiseno")
	public Diseno registrarDiseno(@PathVariable(value = "codigo") Long codigo, @RequestBody Diseno diseno){
		Diseno d = null;
		try {
			d = servicioRegistro.registrarDiseno(codigo, diseno);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
		}
		return d;
	}*/
	
	//FILTRADO
	@GetMapping("/cliente/{codigo}")
	public Cliente mostrarCliente(Long codigo) {
		Cliente c = null;
		try {
			c = servicioRegistro.mostrarCliente(codigo);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No se encontro entidad");
		}
		return c;
	}
	
	@GetMapping("/publicador/{codigo}")
	public Publicador mostrarPublicador(Long codigo) {
		Publicador p = null;
		try {
			p = servicioRegistro.mostrarPublicador(codigo);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No se encontro entidad");
		}
		return p;
	}
	
	@GetMapping("/vivienda/{codigo}")
	public Vivienda mostrarVivienda(Long codigo) {
		Vivienda v = null;
		try {
			v = servicioRegistro.mostrarVivienda(codigo);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No se encontro entidad");
		}
		return v;
	}
	
	@GetMapping("/filtrarVivienda/{ubicacion}")
	public List<Vivienda> filtrarViviendas(@PathVariable String ubicacion) {
		return servicioRegistro.filtrarViviendas(ubicacion);
	}
	
	//LISTADO
	@GetMapping("/clientes")
	public List<Cliente> obtenerClientes(){
		return servicioRegistro.obtenerClientes();
	}	
	
	@GetMapping("/publicadores")
	public List<Publicador> obtenerPublicadores(){
		return servicioRegistro.obtenerPublicadores();
	}	
	
	@GetMapping("/viviendas")
	public List<Vivienda> obtenerViviendas(){
		return servicioRegistro.obtenerViviendas();
	}	
	
	/*@GetMapping("/disenos")
	public List<Diseno> obtenerDisenos(){
		return servicioRegistro.obtenerDisenos();
	}	*/
	
}
