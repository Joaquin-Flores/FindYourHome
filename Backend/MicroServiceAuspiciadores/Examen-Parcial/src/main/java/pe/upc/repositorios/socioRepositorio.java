package pe.upc.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import pe.upc.entidades.Socio;

public interface socioRepositorio extends JpaRepository<Socio, Long> {
	@Query("SELECT s FROM Socio s WHERE s.nombre LIKE %:nombre%")
	List<Socio> busquedaNombre(@Param ("nombre") String nombre );
}
