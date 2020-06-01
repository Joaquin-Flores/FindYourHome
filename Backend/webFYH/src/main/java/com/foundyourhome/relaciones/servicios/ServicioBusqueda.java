package com.foundyourhome.relaciones.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foundyourhome.relaciones.entidades.Cliente;
import com.foundyourhome.relaciones.entidades.Contacto;
import com.foundyourhome.relaciones.entidades.Publicador;
import com.foundyourhome.relaciones.entidades.ResumenDiseno;
import com.foundyourhome.relaciones.entidades.Suscripcion;
import com.foundyourhome.relaciones.entidades.Vivienda;
import com.foundyourhome.relaciones.repositorios.RepositorioCliente;
import com.foundyourhome.relaciones.repositorios.RepositorioContacto;
import com.foundyourhome.relaciones.repositorios.RepositorioPublicador;
import com.foundyourhome.relaciones.repositorios.RepositorioResumenDiseno;
import com.foundyourhome.relaciones.repositorios.RepositorioSuscripcion;
import com.foundyourhome.relaciones.repositorios.RepositorioVivienda;

@Service
public class ServicioBusqueda {
	
	@Autowired
	RepositorioCliente repositorioCliente;
	
	@Autowired
	RepositorioPublicador repositorioPublicador;
	
	@Autowired
	RepositorioVivienda repositorioVivienda;
	
	@Autowired
	RepositorioResumenDiseno repositorioResumenDiseno;
	
	@Autowired
	RepositorioContacto repositorioContacto;
	
	@Autowired
	RepositorioSuscripcion repositorioSuscripcion;
	
	public Cliente mostrarCliente(Long codigo) throws Exception{
		Cliente cliente = repositorioCliente.findById(codigo).orElseThrow(() -> new Exception("No se encontro entidad"));
		return cliente;
	}
	
	public Publicador mostrarPublicador(Long codigo) throws Exception{
		Publicador publicador = repositorioPublicador.findById(codigo).orElseThrow(() -> new Exception("No se encontro entidad"));
		return publicador;
	}
	
	public Vivienda mostrarVivienda(Long codigo) throws Exception{
		Vivienda vivienda = repositorioVivienda.findById(codigo).orElseThrow(() -> new Exception("No se encontro entidad"));
		return vivienda;
	}
	
	public Suscripcion mostrarSuscripcion(Long codigo) throws Exception{
		Suscripcion suscripcion = repositorioSuscripcion.findById(codigo).orElseThrow(() -> new Exception("No se encontro entidad"));
		return suscripcion;
	}
	
	public ResumenDiseno mostrarResumenDiseno(Long codigo) throws Exception{
		ResumenDiseno resumenDiseno = repositorioResumenDiseno.findById(codigo).orElseThrow(() -> new Exception("No se encontro entidad"));
		return resumenDiseno;
	}
	
	public Contacto mostrarContacto(Long codigo) throws Exception{
		Contacto contacto = repositorioContacto.findById(codigo).orElseThrow(() -> new Exception("No se encontro entidad"));
		return contacto;
	}
	
	//FILTROS PERSONALIZADOS
	public List<Vivienda> filtrarViviendas(String ubicacion){
		return repositorioVivienda.filtrarVivienda(ubicacion);
	}
	
	public List<Vivienda> filtrarViviendaPrecio(Double precio){
		return repositorioVivienda.filtrarViviendaPrecio(precio);
	}
	
	public List<Vivienda> filtrarViviendasNumHabitaciones(Double numHabitaciones){
		return repositorioVivienda.filtrarViviendaHabitacion(numHabitaciones);
	}
	
	public List<Vivienda> filtrarViviendasNumBanos(Double numBanos){
		return repositorioVivienda.filtrarViviendaBano(numBanos);
	}
}
