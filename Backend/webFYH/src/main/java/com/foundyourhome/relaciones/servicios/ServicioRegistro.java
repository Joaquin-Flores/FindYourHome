package com.foundyourhome.relaciones.servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.foundyourhome.relaciones.entidades.Cliente;
import com.foundyourhome.relaciones.entidades.Color;
import com.foundyourhome.relaciones.entidades.Contacto;
import com.foundyourhome.relaciones.entidades.Estilo;
//import com.foundyourhome.relaciones.entidades.Diseno;
import com.foundyourhome.relaciones.entidades.Publicador;
import com.foundyourhome.relaciones.entidades.ResumenDiseno;
import com.foundyourhome.relaciones.entidades.Suscripcion;
import com.foundyourhome.relaciones.entidades.Vivienda;
import com.foundyourhome.relaciones.repositorios.RepositorioCliente;
import com.foundyourhome.relaciones.repositorios.RepositorioColor;
import com.foundyourhome.relaciones.repositorios.RepositorioContacto;
import com.foundyourhome.relaciones.repositorios.RepositorioEstilo;
import com.foundyourhome.relaciones.repositorios.RepositorioPublicador;
import com.foundyourhome.relaciones.repositorios.RepositorioResumenDiseno;
import com.foundyourhome.relaciones.repositorios.RepositorioSuscripcion;
import com.foundyourhome.relaciones.repositorios.RepositorioVivienda;

@Service
public class ServicioRegistro {
	
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
	
	@Autowired
	RepositorioEstilo repositorioEstilo;
	
	@Autowired
	RepositorioColor repositorioColor;
	
	@Transactional(rollbackFor = Exception.class)
	public Vivienda registrarVivienda(Long codigo, Vivienda vivienda)  throws Exception {
		Publicador publicador = repositorioPublicador.findById(codigo).orElseThrow(() -> new Exception("No se encontro entidad"));
		vivienda.setPublicador(publicador);
		return repositorioVivienda.save(vivienda);
	}

	//REGISTRO DE LAS ENTIDADES
	@Transactional(rollbackFor = Exception.class)
	public Cliente registrarCliente(Cliente cliente) {
		return repositorioCliente.save(cliente);
	}
	
	@Transactional(rollbackFor = Exception.class)
	public Publicador registrarPublicador(Publicador publicador) {
		return repositorioPublicador.save(publicador);
	}
	
	@Transactional(rollbackFor = Exception.class)
	public Estilo registrarEstilo(Estilo estilo, Cliente cliente) {
		estilo.setCliente(cliente);
		return repositorioEstilo.save(estilo);
	}
	
	@Transactional(rollbackFor = Exception.class)
	public Color registrarColor(Color color, Cliente cliente) {
		color.setCliente(cliente);
		return repositorioColor.save(color);
	}

	@Transactional(rollbackFor = Exception.class)
	public Cliente registrarListaDeseoCliente(Cliente cliente, Long codigo) throws Exception {
		Vivienda vivienda = repositorioVivienda.findById(codigo).orElseThrow(() -> new Exception("No se encontro entidad"));
		cliente.getListaDeseo().add(vivienda);
		vivienda.getCliente().add(cliente);
		return repositorioCliente.save(cliente);
	}
	
	@Transactional(rollbackFor = Exception.class)
	public ResumenDiseno registrarResumenDiseno(ResumenDiseno resumenDiseno){
		return repositorioResumenDiseno.save(resumenDiseno);
	}
	
	@Transactional(rollbackFor = Exception.class)
	public Suscripcion registrarSuscripcion(Suscripcion suscripcion){
		return repositorioSuscripcion.save(suscripcion);
	}
	
	@Transactional(rollbackFor = Exception.class)
	public Contacto registrarContacto(Contacto contacto){
		return repositorioContacto.save(contacto);
	}
}	
