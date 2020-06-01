package com.foundyourhome.relaciones.entidades;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "TP_VIVIENDADISENO")
public class ResumenDiseno implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CODIGO_RESUMENDISENO")
	private Long codigo;
	private Double disenoEscogido;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "CODIGO_CLIENTE")
	private Cliente cliente;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "CODIGO_PUBLICADOR")
	private Publicador publicador;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "CODIGO_VIVIENDA")
	private Vivienda vivienda;

	@OneToOne(mappedBy = "resumenDiseno")
	private Contacto contacto;

	public ResumenDiseno(Long codigo, Double disenoEscogido, Cliente cliente, Publicador publicador, Vivienda vivienda,
			Contacto contacto) {
		super();
		this.codigo = codigo;
		this.disenoEscogido = disenoEscogido;
		this.cliente = cliente;
		this.publicador = publicador;
		this.vivienda = vivienda;
		this.contacto = contacto;
	}

	public ResumenDiseno() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getCodigo() {
		return codigo;
	}

	public Double getDisenoEscogido() {
		return disenoEscogido;
	}

	public void setDisenoEscogido(Double disenoEscogido) {
		this.disenoEscogido = disenoEscogido;
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

	public Contacto getContacto() {
		return contacto;
	}

	public void setContacto(Contacto contacto) {
		this.contacto = contacto;
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
		ResumenDiseno other = (ResumenDiseno) obj;
		if (codigo == null) {
			if (other.codigo != null)
				return false;
		} else if (!codigo.equals(other.codigo))
			return false;
		return true;
	}
}
