package pe.upc.entidades;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Socio implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idSocio;
	private String nombre;
	private String email;
	private String direccion;
	private int numeroDependientes;
	

	public Long getIdSocio() {
		return idSocio;
	}
	public void setIdSocio(Long idSocio) {
		this.idSocio = idSocio;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	public int getNumeroDependientes() {
		return numeroDependientes;
	}
	public void setNumeroDependientes(int numeroDependientes) {
		this.numeroDependientes = numeroDependientes;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((idSocio == null) ? 0 : idSocio.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Socio other = (Socio) obj;
		if (idSocio == null) {
			if (other.idSocio != null)
				return false;
		} else if (!idSocio.equals(other.idSocio))
			return false;
		return true;
	}
	
	public Socio() {
		super();
		// TODO Auto-generated constructor stub
	}

}
