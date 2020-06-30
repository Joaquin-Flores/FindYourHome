package pe.upc.restService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pe.upc.entidades.Socio;
import pe.upc.servicios.servicioSocio;

@RestController
@RequestMapping("/api")
public class rest {
@Autowired
private servicioSocio socioServicio;

@GetMapping ("/listar")
public List<Socio> listarSocio(){
	return socioServicio.listarSocios();
}

@PostMapping ("/registrar")
public Socio registrar(@RequestBody Socio socio) {
	return socioServicio.registrar(socio);
}



}
