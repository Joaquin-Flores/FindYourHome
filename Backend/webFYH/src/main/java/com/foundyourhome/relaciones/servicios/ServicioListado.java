package com.foundyourhome.relaciones.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foundyourhome.relaciones.entidades.Cliente;
import com.foundyourhome.relaciones.entidades.Publicador;
import com.foundyourhome.relaciones.entidades.Suscripcion;
import com.foundyourhome.relaciones.entidades.Vivienda;
import com.foundyourhome.relaciones.repositorios.RepositorioCliente;
import com.foundyourhome.relaciones.repositorios.RepositorioPublicador;
import com.foundyourhome.relaciones.repositorios.RepositorioResumenDiseno;
import com.foundyourhome.relaciones.repositorios.RepositorioSuscripcion;
import com.foundyourhome.relaciones.repositorios.RepositorioVivienda;

@Service
public class ServicioListado {
	
	@Autowired
	RepositorioCliente repositorioCliente;
	
	@Autowired
	RepositorioPublicador repositorioPublicador;
	
	@Autowired
	RepositorioVivienda repositorioVivienda;
	
	@Autowired
	RepositorioResumenDiseno resumenDiseno;
	
	@Autowired
	RepositorioSuscripcion repositorioSuscripcion;
	
	
	public List<Cliente> obtenerClientes(){
		return (List<Cliente>) repositorioCliente.findAll();
	}
	
	public List<Publicador> obtenerPublicadores(){
		return (List<Publicador>) repositorioPublicador.findAll();
	}
	
	public List<Vivienda> obtenerViviendas(){
		return (List<Vivienda>) repositorioVivienda.findAll();
	}
	
	public List<Suscripcion> obtenerSuscripciones(){
		return (List<Suscripcion>) repositorioSuscripcion.findAll();
	}
	
}
