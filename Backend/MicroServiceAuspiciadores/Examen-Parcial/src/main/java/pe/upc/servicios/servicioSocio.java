package pe.upc.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.upc.entidades.Socio;
import pe.upc.repositorios.socioRepositorio;

@Service
public class servicioSocio {
	@Autowired
	private socioRepositorio repoSocio;
	
	public Socio registrar (Socio socio) {
		return repoSocio.save(socio);
	}
	public List<Socio> listarSocios(){
		return repoSocio.findAll();
	}
}
