package com.foundyourhome.relaciones.servicios;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foundyourhome.relaciones.entidades.Cliente;
import com.foundyourhome.relaciones.entidades.Publicador;
import com.foundyourhome.relaciones.entidades.Contacto;
import com.foundyourhome.relaciones.entidades.Suscripcion;
import com.foundyourhome.relaciones.entidades.Vivienda;
import com.foundyourhome.relaciones.repositorios.RepositorioCliente;
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
	
	public Contacto mostrarResumenDiseno(Long codigo) throws Exception{
		Contacto resumenDiseno = repositorioResumenDiseno.findById(codigo).orElseThrow(() -> new Exception("No se encontro entidad"));
		return resumenDiseno;
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
	
	public List<Vivienda> filtradoGeneral(ArrayList<String> ubicacion, Double min, Double max, Double numHabitaciones, Double numBanos){
		System.out.println(ubicacion.size());
		if (ubicacion.contains("a") && min == 0.0d && max == 0.0d && numHabitaciones == 0.0d && numBanos == 0.0d) {
			List<Vivienda>v = repositorioVivienda.findAll();
			List<Vivienda>Vr = new ArrayList<Vivienda>();
			
			for(Vivienda vivienda: v) {
				if(vivienda.getFueContactado() == 0) {
					Vr.add(vivienda);
				}
			}
			return Vr;
		}
	
		System.out.println(numHabitaciones + ", " + numBanos);
		boolean cumple = false;
		
		List<Vivienda>	lVivienda = repositorioVivienda.findAll();
		List<Vivienda> resVivienda = new ArrayList<Vivienda>();
		
		for(Vivienda v: lVivienda) {
			if (ubicacion.size()!= 0 && !ubicacion.contains("a")) {
				for(String u: ubicacion) {
					if(u.equals(v.getDireccion()))
						cumple = true;
				}
				if(cumple == false)
					 continue; 
			}
			cumple = min <= v.getPrecio()? true:false;
			System.out.println(cumple + "2");
			if(cumple == false)
				continue; 
			 
			if (max != 0.0d) {
				 cumple = max >= v.getPrecio()? true:false;
				 System.out.println(cumple + "3");
				 if(cumple == false)
					 continue; 
			}
			if (numHabitaciones != 0.0d) {
				 cumple = Double.compare(numHabitaciones, v.getNumHabitaciones()) == 0? true:false;
				 System.out.println(cumple + "4");
				 if(cumple == false)
					 continue; 
			}
			if (numBanos != 0.0d) {
				 cumple = Double.compare(numBanos, v.getNumBano()) == 0? true:false;
				 System.out.println(cumple + "5");
				 if(cumple == false)
					 continue; 
			}
			if(cumple == true && v.getFueContactado() == 0) {
				System.out.println(v.getFueContactado());
				resVivienda.add(v);
				cumple = false;
			}
		}
		System.out.println(resVivienda.size());
		if(resVivienda.size() > 0)
			return resVivienda;
		
		return null;
		//return repositorioVivienda.findAll();
	}
	
	public List<Vivienda> viviendaPublicador(Long codigo) throws Exception{
		Publicador publicador = repositorioPublicador.findById(codigo).orElseThrow(() -> new Exception("No se encontro entidad"));

		return publicador.getVivienda();
	}
	
	public Publicador publicadorByVivienda(Long codigo) throws Exception{
		Vivienda vivienda = repositorioVivienda.findById(codigo).orElseThrow(() -> new Exception("No se encontro entidad"));
		return vivienda.getPublicador();
	}
		
	public List<Vivienda> viviendaByCliente(Long codigo) throws Exception{
		Cliente cliente = repositorioCliente.findById(codigo).orElseThrow(() -> new Exception("No se encontro entidad"));
		List<Contacto> contacto = cliente.getContacto();
		List<Vivienda> vivienda = new ArrayList<Vivienda>();
		for(Contacto c: contacto) {
			vivienda.add(c.getVivienda());
		}
		return vivienda;
	}
	
	public List<Vivienda> viviendasByPublicador(Long codigo) throws Exception{
		Publicador publicador = repositorioPublicador.findById(codigo).orElseThrow(() -> new Exception("No se encontro entidad"));
		List<Contacto> contacto = publicador.getContacto();
		List<Vivienda> vivienda = new ArrayList<Vivienda>();
		for(Contacto c: contacto) {
			vivienda.add(c.getVivienda());
		}
		return vivienda;
	}
}
