package com.foundyourhome.relaciones.entidades;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "TP_PUBLICADOR")
public class Publicador implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CODIGO_PUBLICADOR")
	private Long codigo;
	
	@Column(unique = true, length = 20)
	private String razonSocial;
	@Column(unique = true, length = 20)
	private String ruc;
	private String nombre;
	
	@OneToMany(mappedBy = "publicador", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Vivienda> vivienda;
	
	@OneToOne(mappedBy = "publicador")
	private ResumenDiseno viviendaDiseno;
	
	@OneToOne(mappedBy = "publicador")
	private Suscripcion suscripcion;

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getRazonSocial() {
		return razonSocial;
	}

	public void setRazonSocial(String razonSocial) {
		this.razonSocial = razonSocial;
	}

	public String getRuc() {
		return ruc;
	}

	public void setRuc(String ruc) {
		this.ruc = ruc;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public List<Vivienda> getVivienda() {
		return vivienda;
	}

	public void setVivienda(List<Vivienda> vivienda) {
		this.vivienda = vivienda;
	}

	public ResumenDiseno getViviendaDiseno() {
		return viviendaDiseno;
	}

	public void setViviendaDiseno(ResumenDiseno viviendaDiseno) {
		this.viviendaDiseno = viviendaDiseno;
	}

	public Suscripcion getSuscripcion() {
		return suscripcion;
	}

	public void setSuscripcion(Suscripcion suscripcion) {
		this.suscripcion = suscripcion;
	}
	
}
