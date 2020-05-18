package com.foundyourhome.relaciones.entidades;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "TP_CONTACTO")
public class Contacto implements Serializable{
	
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
	
	@OneToOne
	@JoinColumn(name = "CODIGO_VIVIENDADISENO")
	private ResumenDiseno viviendaDiseno;

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getFecha() {
		return fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	public ResumenDiseno getViviendaDiseno() {
		return viviendaDiseno;
	}

	public void setViviendaDiseno(ResumenDiseno viviendaDiseno) {
		this.viviendaDiseno = viviendaDiseno;
	}
	
}
