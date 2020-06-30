package com.foundyourhome.relaciones.entidades;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "TP_CONTACTO")
public class Contacto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CODIGO_CONTACTO")
	private Long codigo;
	@Column(length = 20)
	private String fecha;

	@ManyToOne
	@JoinColumn(name = "CODIGO_CLIENTE")
	@JsonIgnore
	private Cliente cliente;

	@ManyToOne
	@JoinColumn(name = "CODIGO_PUBLICADOR")
	@JsonIgnore
	private Publicador publicador;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "CODIGO_VIVIENDA")
	@JsonIgnore
	private Vivienda vivienda;

	public Contacto(Long codigo, String fecha, Cliente cliente, Publicador publicador, Vivienda vivienda) {
		super();
		this.codigo = codigo;
		this.fecha = fecha;
		this.cliente = cliente;
		this.publicador = publicador;
		this.vivienda = vivienda;
	}

	public Contacto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getCodigo() {
		return codigo;
	}

	public String getFecha() {
		return fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public Publicador getPublicador() {
		return publicador;
	}

	public void setPublicador(Publicador publicador) {
		this.publicador = publicador;
	}

	public Vivienda getVivienda() {
		return vivienda;
	}

	public void setVivienda(Vivienda vivienda) {
		this.vivienda = vivienda;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((codigo == null) ? 0 : codigo.hashCode());
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
		Contacto other = (Contacto) obj;
		if (codigo == null) {
			if (other.codigo != null)
				return false;
		} else if (!codigo.equals(other.codigo))
			return false;
		return true;
	}
}
