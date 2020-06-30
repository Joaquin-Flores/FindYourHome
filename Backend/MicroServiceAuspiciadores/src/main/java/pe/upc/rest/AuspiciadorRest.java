package pe.upc.rest;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import pe.upc.entidad.Auspiciador;
import pe.upc.servicio.AuspiciadorService;


@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST })

public class AuspiciadorRest {
	@Autowired
	AuspiciadorService servicioRegistro;
		
	
	@PostMapping("/registrarAuspiciador")
	public Auspiciador registrarCliente(@RequestBody Auspiciador cliente){
		Auspiciador c = null;
		try {
			c = servicioRegistro.registrarCliente(cliente);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imposible de concretar");
		}
		return c;
	}
	
	@GetMapping("/listar")
	public List<Auspiciador> obteneAuspiciador(){
		return servicioRegistro.obtenerAuspiciadores();
	}	
}
