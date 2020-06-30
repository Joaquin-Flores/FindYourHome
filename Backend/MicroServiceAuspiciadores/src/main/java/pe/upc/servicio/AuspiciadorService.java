package pe.upc.servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



import pe.upc.entidad.Auspiciador;
import pe.upc.repositorio.RepositorioAuspiciador;


@Service
public class AuspiciadorService {
	
	@Autowired
	RepositorioAuspiciador repositorioAuspiciador;


	@Transactional(rollbackFor = Exception.class)
	public Auspiciador registrarCliente(Auspiciador auspiciador) {
		return repositorioAuspiciador.save(auspiciador);
	}
	@Transactional(rollbackFor = Exception.class)
	public List<Auspiciador> obtenerAuspiciadores(){
		return (List<Auspiciador>) repositorioAuspiciador.findAll();
	}
	
	


}


