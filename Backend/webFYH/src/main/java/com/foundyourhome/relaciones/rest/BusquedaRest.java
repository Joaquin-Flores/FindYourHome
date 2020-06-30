package com.foundyourhome.relaciones.rest;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.zip.DataFormatException;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.foundyourhome.relaciones.entidades.Cliente;
import com.foundyourhome.relaciones.entidades.Diseno;
import com.foundyourhome.relaciones.entidades.Plano;
import com.foundyourhome.relaciones.entidades.Publicador;
import com.foundyourhome.relaciones.entidades.Contacto;
import com.foundyourhome.relaciones.entidades.Suscripcion;
import com.foundyourhome.relaciones.entidades.Vivienda;
import com.foundyourhome.relaciones.repositorios.RepositorioDiseno;
import com.foundyourhome.relaciones.repositorios.RepositorioPlano;
import com.foundyourhome.relaciones.servicios.ServicioBusqueda;


@RestController
@RequestMapping("/api")
public class BusquedaRest {
	
	@Autowired
	ServicioBusqueda servicioBusqueda;
	
	@Autowired
	RepositorioPlano repositorioPlano;
	
	@Autowired
	RepositorioDiseno repositorioDiseno;
	
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
	public Contacto mostrarResumenDiseno(@PathVariable(value = "codigo") Long codigo) throws Exception{
		Contacto rD = null;
		try {
			rD = servicioBusqueda.mostrarResumenDiseno(codigo);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No se encontro entidad");
		}
		return rD;
	}
	
	
	@SuppressWarnings("null")
	@GetMapping("/obtenerimagenplano/{codigo}")
	public List<Plano> getImagePlano(@PathVariable(value = "codigo") Long codigo) throws InterruptedException {
		Vivienda vivienda = null;
		try {
			vivienda = servicioBusqueda.mostrarVivienda(codigo);
		} catch (Exception e) {
		  e.printStackTrace();
		}
			
		List<Plano> plano = new ArrayList<Plano>();	
		
		for(Plano p : vivienda.getListaPlano()) {
		  Plano p2 = new Plano(p.getName(), p.getType(), decompressBytes(p.getPicByte()), vivienda);
		  plano.add(p2);
		}
				
		return (List<Plano>) plano;
	}
	
	@SuppressWarnings("null")
	@GetMapping("/obtenerimagendiseno/{codigo}")
	public List<Diseno> getImageDiseno(@PathVariable(value = "codigo") Long codigo) throws InterruptedException {
		Vivienda vivienda = null;
		try {
			vivienda = servicioBusqueda.mostrarVivienda(codigo);
		} catch (Exception e) {
		  e.printStackTrace();
		}
			
		List<Diseno> diseno = new ArrayList<Diseno>();	
		
		for(Diseno p : vivienda.getListaDiseno()) {
		  Diseno p2 = new Diseno(p.getName(), p.getType(), decompressBytes(p.getPicByte()), vivienda);
		  diseno.add(p2);
		}
				
		return (List<Diseno>) diseno;
	}
	
	@SuppressWarnings("null")
	@GetMapping("/obtenerprimerimagen/{codigo}")
	public Diseno getPrimerImage(@PathVariable(value = "codigo") Long codigo) throws InterruptedException {
		Vivienda vivienda = null;
		try {
			vivienda = servicioBusqueda.mostrarVivienda(codigo);
			System.out.println(vivienda);
		} catch (Exception e) {
		  e.printStackTrace();
		}
		Diseno p = vivienda.getListaDiseno().get(0);	
		Diseno diseno = new Diseno(p.getName(), p.getType(), decompressBytes(p.getPicByte()), vivienda);	
		
		return diseno;
	}
	
	public static byte[] decompressBytes(byte[] data) {
	     Inflater inflater = new Inflater();
	     inflater.setInput(data);
	     ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
	     byte[] buffer = new byte[1024];
	
	     try {
	         while (!inflater.finished()) {
	             int count = inflater.inflate(buffer);
	             outputStream.write(buffer, 0, count);
	         }
	         outputStream.close();
	     } catch (IOException ioe) {}
	     
	     catch (DataFormatException e) {}
	     return outputStream.toByteArray();
	}
	
	//FILTROS PERSONALIZADOS
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
	
	@GetMapping("/viviendapublicador/{codigo}")
	public List<Vivienda> viviendaPublicador(@PathVariable(value = "codigo") Long codigo) throws Exception {
		return servicioBusqueda.viviendaPublicador(codigo);
	}
	
	@GetMapping("/publicadorvivienda/{codigo}")
	public Publicador publicadorByVivienda(@PathVariable(value = "codigo") Long codigo) throws Exception {
		return servicioBusqueda.publicadorByVivienda(codigo);
	}
	
	@GetMapping("/clientevivienda/{codigo}")
	public List<Vivienda> viviendaByCliente(@PathVariable(value = "codigo") Long codigo) throws Exception {
		return servicioBusqueda.viviendaByCliente(codigo);
	}
	
	@GetMapping("/viviendabypublicador/{codigo}")
	public List<Vivienda> viviendaByPublicador(@PathVariable(value = "codigo") Long codigo) throws Exception {
		return servicioBusqueda.viviendasByPublicador(codigo);
	}
	
	@GetMapping("/filtradogeneral/{ubicacion}/{min}/{max}/{numHabitaciones}/{numBanos}")
	public List<Vivienda> filtradoGeneral(@PathVariable(value = "ubicacion") ArrayList<String> ubicacion,
											@PathVariable(value = "min") Double min, 
											@PathVariable(value = "max") Double max,
											@PathVariable(value = "numHabitaciones") Double numHabitaciones,	
											@PathVariable(value = "numBanos") Double numBanos){
		return servicioBusqueda.filtradoGeneral(ubicacion, min, max, numHabitaciones, numBanos);
	}
	
	
}
