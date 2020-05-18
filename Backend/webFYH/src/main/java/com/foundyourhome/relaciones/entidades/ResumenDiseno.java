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
public class ResumenDiseno implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CODIGO_VIVIENDADISENO")
	private Long codigo;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "CODIGO_CLIENTE")
	private Cliente cliente;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "CODIGO_PUBLICADOR")
	private Publicador publicador;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "CODIGO_DISENO")
	private Diseno diseno;	
	
	@OneToOne(mappedBy = "viviendaDiseno")
	private Contacto contacto;

	public Long getCodigo() {
		return codigo;
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

	public Diseno getDiseno() {
		return diseno;
	}

	public void setDiseno(Diseno diseno) {
		this.diseno = diseno;
	}

	public Contacto getContacto() {
		return contacto;
	}

	public void setContacto(Contacto contacto) {
		this.contacto = contacto;
	}
	
	
}
