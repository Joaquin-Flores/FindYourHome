package com.foundyourhome.relaciones.servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foundyourhome.relaciones.entidades.Cliente;
import com.foundyourhome.relaciones.entidades.Publicador;
import com.foundyourhome.relaciones.entidades.Suscripcion;
import com.foundyourhome.relaciones.entidades.Vivienda;
import com.foundyourhome.relaciones.repositorios.RepositorioCliente;
import com.foundyourhome.relaciones.repositorios.RepositorioContacto;
import com.foundyourhome.relaciones.repositorios.RepositorioPublicador;
import com.foundyourhome.relaciones.repositorios.RepositorioResumenDiseno;
import com.foundyourhome.relaciones.repositorios.RepositorioSuscripcion;
import com.foundyourhome.relaciones.repositorios.RepositorioVivienda;

@Service
public class ServicioMantenimiento {
	
	@Autowired
	RepositorioCliente repositorioCliente;
	
	@Autowired
	RepositorioPublicador repositorioPublicador;
	
	@Autowired
	RepositorioVivienda repositorioVivienda;
	
	@Autowired
	RepositorioResumenDiseno resumenDiseno;
	
	@Autowired
	RepositorioContacto repositorioContacto;
	
	@Autowired
	RepositorioSuscripcion repositorioSuscripcion;
	
	
	public Cliente actualizarDatosCliente(Long codigo, Cliente cliente) throws Exception{
		Cliente c = repositorioCliente.findById(codigo).orElseThrow(() -> new Exception("No se encontro entidad"));
		c.setCodigo(codigo);
		c.setContrasena(cliente.getContrasena());
		c.setCorreo(cliente.getCorreo());
		c.setDistrito(cliente.getCorreo());
		return repositorioCliente.save(c);
	}
	
	public Publicador actualizarDatosPublicador(Long codigo, Publicador publicador) throws Exception{
		Publicador p = repositorioPublicador.findById(codigo).orElseThrow(() -> new Exception("No se encontro entidad"));
		p.setCodigo(codigo);
		p.setContacto(publicador.getContacto());
		p.setCorreo(publicador.getCorreo());
		return repositorioPublicador.save(p);
	}
	
	public Suscripcion actualizarSuscripcion(Long codigo, Suscripcion suscripcion) throws Exception{
		Suscripcion s = repositorioSuscripcion.findById(codigo).orElseThrow(() -> new Exception("No se encontro entidad"));
		s.setTipoSuscripcion(suscripcion.getTipoSuscripcion());
		s.setCosto(suscripcion.getCosto());
		return repositorioSuscripcion.save(s);
	}
	
	public Vivienda actualizarVivienda(Long codigo, Vivienda vivienda) throws Exception{
		Vivienda v = repositorioVivienda.findById(codigo).orElseThrow(() -> new Exception("No se encontro entidad"));
		
		v.setTipoTerreno(vivienda.getTipoTerreno());
		v.setPrecio(vivienda.getPrecio());
		v.setNumHabitaciones(vivienda.getNumHabitaciones()); 
		v.setNumBano(vivienda.getNumBano());       
		v.setTieneGaraje(vivienda.getTieneGaraje());
		v.setPermiteMascota(vivienda.getPermiteMascota());
		v.setTienecontrolRenta(vivienda.getTienecontrolRenta());
		v.setTipoPiso(vivienda.getTipoPiso());     
		v.setTieneCalefaccion(vivienda.getTieneCalefaccion());
		v.setTipoEstructura(vivienda.getTipoEstructura());
		v.setTipoExterior(vivienda.getTipoExterior());
		v.setTipoHogar(vivienda.getTipoHogar());
		v.setBase(vivienda.getBase());
		v.setTecho(vivienda.getTecho()); 
		v.setNuevaConstruccion(vivienda.getNuevaConstruccion());
		v.setAnoConstruccion(vivienda.getAnoConstruccion());
		v.setDimension(vivienda.getDimension());
		v.setUbicacion(vivienda.getUbicacion());
		return repositorioVivienda.save(v);
	}
	
	public Vivienda eliminarVivienda(Long codigo) throws Exception {
		Vivienda vivienda = repositorioVivienda.findById(codigo).orElseThrow(() -> new Exception("No se encontro entidad"));
		repositorioVivienda.delete(vivienda);
		return vivienda;
	}
	
	public Publicador eliminarPublicador(Long codigo) throws Exception {
		Publicador publicador = repositorioPublicador.findById(codigo).orElseThrow(() -> new Exception("No se encontro entidad"));
		repositorioPublicador.delete(publicador);
		return publicador;
	}
	
	public Suscripcion eliminarSuscripcion(Long codigo) throws Exception {
		Suscripcion suscripcion = repositorioSuscripcion.findById(codigo).orElseThrow(() -> new Exception("No se encontro entidad"));
		repositorioSuscripcion.delete(suscripcion);
		return suscripcion;
	}
	
}
