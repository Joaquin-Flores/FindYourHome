package com.foundyourhome.relaciones.servicios;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.foundyourhome.relaciones.entidades.Cliente;
//import com.foundyourhome.relaciones.entidades.Diseno;
import com.foundyourhome.relaciones.entidades.Publicador;
import com.foundyourhome.relaciones.entidades.Vivienda;
import com.foundyourhome.relaciones.repositorios.RepositorioCliente;
import com.foundyourhome.relaciones.repositorios.RepositorioDiseno;
import com.foundyourhome.relaciones.repositorios.RepositorioPublicador;
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
	RepositorioDiseno repositorioDiseno;
	
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
	public Vivienda registrarVivienda(Long codigo, Vivienda vivienda)  throws Exception {
		Publicador publicador = mostrarPublicador(codigo);
		vivienda.setPublicador(publicador);
		return repositorioVivienda.save(vivienda);
	}
	
	/*@Transactional(rollbackFor = Exception.class)
	public Diseno registrarDiseno(Long codigo, Diseno diseno) throws Exception{
		Vivienda vivienda = mostrarVivienda(codigo);
		diseno.setVivienda(vivienda);
		return repositorioDiseno.save(diseno);
	}*/
	
	//FILTROS PARA FILTRAR UNA ENTIDAD
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
	
	//LISTADO DE LAS ENTIDADES
	public List<Cliente> obtenerClientes(){
		return (List<Cliente>) repositorioCliente.findAll();
	}
	
	public List<Publicador> obtenerPublicadores(){
		return (List<Publicador>) repositorioPublicador.findAll();
	}
	
	public List<Vivienda> obtenerViviendas(){
		return (List<Vivienda>) repositorioVivienda.findAll();
	}
	
	public List<Vivienda> filtrarViviendas(String ubicacion){
		return repositorioVivienda.filtrarVivienda(ubicacion);
	}
	/*public List<Diseno> obtenerDisenos(){
		return (List<Diseno>) repositorioDiseno.findAll();
	}*/

}	
