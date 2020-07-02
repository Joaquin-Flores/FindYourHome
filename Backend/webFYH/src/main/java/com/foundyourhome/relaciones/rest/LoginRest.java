package com.foundyourhome.relaciones.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.foundyourhome.relaciones.entidades.Cliente;
import com.foundyourhome.relaciones.entidades.Publicador;
import com.foundyourhome.relaciones.servicios.ServicioLogin;

//@RestController
//@RequestMapping("/login")
public class LoginRest {
	
//	@Autowired
//	ServicioLogin servicioLogin;
//	
//	
//	@GetMapping("/logincliente")
//	@CrossOrigin(origins = "http://localhost:4200")                                                                             
//	public Cliente loginCliente(@RequestBody Cliente cliente) {
//		Cliente c = null;
//		try {
//			c = servicioLogin.loginCliente(cliente);
//		} catch (Exception e) {
//			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
//		}
//		return c;
//	}
//	
//	@PostMapping("/loginpublicador")
//	@CrossOrigin(origins = "http://localhost:4200")
//	public Publicador loginPublicador(@RequestBody Publicador publicador) {
//		Publicador p = null;
//		try {
//			p = servicioLogin.loginPublicador(publicador);
//		} catch (Exception e) {
//			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
//		}
//		return p;
//	}
}
