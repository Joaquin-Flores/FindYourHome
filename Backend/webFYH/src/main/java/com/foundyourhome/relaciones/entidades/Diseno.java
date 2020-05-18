package com.foundyourhome.relaciones.entidades;


import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "TP_DISENO")
public class Diseno implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CODIGO_DISENO")
	private Long codigo;
	
	@Column(length = 20)
	private String tipo;
	private String estilo;
	
	@ManyToOne
	@JoinColumn(name = "CODIGO_VIVIENDA")
	private Vivienda vivienda;
	
	@OneToOne(mappedBy = "diseno")
	private ResumenDiseno viviendaDiseno;

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getEstilo() {
		return estilo;
	}

	public void setEstilo(String estilo) {
		this.estilo = estilo;
	}

	public ResumenDiseno getViviendaDiseno() {
		return viviendaDiseno;
	}

	public void setViviendaDiseno(ResumenDiseno viviendaDiseno) {
		this.viviendaDiseno = viviendaDiseno;
	}

	public Vivienda getVivienda() {
		return vivienda;
	}

	public void setVivienda(Vivienda vivienda) {
		this.vivienda = vivienda;
	}
	
}
