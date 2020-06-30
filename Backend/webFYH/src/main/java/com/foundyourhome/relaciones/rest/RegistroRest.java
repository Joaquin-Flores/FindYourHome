package com.foundyourhome.relaciones.rest;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.zip.Deflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import com.foundyourhome.relaciones.entidades.Cliente;
import com.foundyourhome.relaciones.entidades.Color;
import com.foundyourhome.relaciones.entidades.Diseno;
import com.foundyourhome.relaciones.entidades.Estilo;
import com.foundyourhome.relaciones.entidades.ListaDeseo;
import com.foundyourhome.relaciones.entidades.Plano;
//import com.foundyourhome.relaciones.entidades.Diseno;
import com.foundyourhome.relaciones.entidades.Publicador;
import com.foundyourhome.relaciones.entidades.Contacto;
import com.foundyourhome.relaciones.entidades.Suscripcion;
import com.foundyourhome.relaciones.entidades.Vivienda;
import com.foundyourhome.relaciones.repositorios.RepositorioDiseno;
import com.foundyourhome.relaciones.repositorios.RepositorioPlano;
import com.foundyourhome.relaciones.servicios.ServicioBusqueda;
import com.foundyourhome.relaciones.servicios.ServicioRegistro;


@RestController
@RequestMapping("/api")
public class RegistroRest {
	
	@Autowired
	ServicioRegistro servicioRegistro;
	
	@Autowired
	ServicioBusqueda servicioBusqueda;
	
	@Autowired
	RepositorioPlano repositorioPlano;
	
	@Autowired
	RepositorioDiseno repositorioDiseno;
	
	
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
	
	@PostMapping("/registrarestilo/{codigo}")
	public Estilo registrarEstilo(@RequestBody Estilo estilo, @PathVariable(value = "codigo") Long codigo) throws Exception{
		Cliente cliente = servicioBusqueda.mostrarCliente(codigo);
		
		Estilo e = null;
		try {
			e = servicioRegistro.registrarEstilo(estilo, cliente);
			
		} catch (Exception e1) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
		}
		return e;
	}
	
	@PostMapping("/registrarcolor/{codigo}")
	public Color registrarColor(@RequestBody Color color, @PathVariable(value = "codigo") Long codigo) throws Exception{
		Cliente cliente = servicioBusqueda.mostrarCliente(codigo);
		
		Color c = null;
		try {
			c = servicioRegistro.registrarColor(color, cliente);
		} catch (Exception e1) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
		}
		return c;
	}
	
	@PostMapping("/uploadplano/{codigo}")
	public BodyBuilder uploadImagenPlano(@RequestParam("imageFile") MultipartFile file,@PathVariable Long codigo) throws IOException {
      System.out.println("Original Image Byte Size - " + file.getBytes().length);
      
      Vivienda vivienda = null;
      try {
    	  vivienda = servicioBusqueda.mostrarVivienda(codigo);
      } catch (Exception e) {
    	  // TODO Auto-generated catch block
    	  e.printStackTrace();
      }
     
      Plano img = new Plano(file.getOriginalFilename(), file.getContentType(), compressBytes(file.getBytes()), vivienda);
      
      vivienda.getListaPlano().add(img);
      repositorioPlano.save(img);
      return ResponseEntity.status(HttpStatus.OK);
	}
	
	@PostMapping("/uploaddiseno/{codigo}")
	public BodyBuilder uploadImagenDiseno(@RequestParam("imageFile") MultipartFile file,@PathVariable Long codigo) throws IOException {
      System.out.println("Original Image Byte Size - " + file.getBytes().length);
      
      Vivienda vivienda = null;
      try {
    	  vivienda = servicioBusqueda.mostrarVivienda(codigo);
      } catch (Exception e) {
    	  // TODO Auto-generated catch block
    	  e.printStackTrace();
      }
     
      Diseno img = new Diseno(file.getOriginalFilename(), file.getContentType(), compressBytes(file.getBytes()), vivienda);
      
      vivienda.getListaDiseno().add(img);
      repositorioDiseno.save(img);
      return ResponseEntity.status(HttpStatus.OK);
	}
	
	
	public static byte[] compressBytes(byte[] data) {
	     Deflater deflater = new Deflater();
	     deflater.setInput(data);
	     deflater.finish();
	     ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
	     
	     byte[] buffer = new byte[1024];

	     while (!deflater.finished()) {
	         int count = deflater.deflate(buffer);
	         outputStream.write(buffer, 0, count);
	     }
	     try {
	         outputStream.close();
	     } catch (IOException e) {}
	     System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);
	     return outputStream.toByteArray();
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
	
	@PostMapping("registrarlistadeseocliente/{CCliente}/{CVivienda}")
	public ListaDeseo registrarListaDeseoVivienda(@PathVariable(value = "CCliente") Long CCliente,@PathVariable(value = "CVivienda") Long CVivienda, @RequestBody ListaDeseo listaDeseo) {
		ListaDeseo lD = null;
		try {
			lD = servicioRegistro.registrarListaDeseo(CCliente, CVivienda, listaDeseo);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
		}
		return lD;
	}
	
	@PostMapping("/registrarsuscripcion")
	public Suscripcion registrarSuscripcion(@RequestBody Suscripcion suscripcion){
		Suscripcion s = null;
		try {
			s = servicioRegistro.registrarSuscripcion(suscripcion);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
		}
		return s;
	}
	
	@PostMapping("/registrarcontacto/{CCliente}/{CVivienda}")
	public Contacto registrarResumenDiseno(@RequestBody Contacto contacto, @PathVariable(value = "CCliente") Long CCliente, @PathVariable(value = "CVivienda") Long CVivienda){
		Contacto rD = null;
		try {
			rD = servicioRegistro.registrarContacto(contacto, CCliente, CVivienda);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
		}
		return rD;
	}
	
}
