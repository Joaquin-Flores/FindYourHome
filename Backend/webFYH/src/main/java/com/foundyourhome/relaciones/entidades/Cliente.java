package com.foundyourhome.relaciones.entidades;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "TP_CLIENTE")
public class Cliente implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CODIGO_CLIENTE")
	private Long codigo;
	
	@Column(unique = true, length = 20)
	private String usuario;
	@Column(unique = true, length = 20)
	private String contrasena;
	@Column(length = 20)
	private String nombre;
	@Column(unique = true, length = 20)
	private String numeroContacto;
	@Column(unique = true, length = 20)
	private String correo;
	@Column(unique = true, length = 20)
	private String ruc;
	
	@ManyToMany(mappedBy = "cliente", cascade = CascadeType.ALL)
	private List<Vivienda> listaDeseo;
	
	@OneToOne(mappedBy = "cliente")
	private ResumenDiseno viviendaDiseno;

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getContrasena() {
		return contrasena;
	}
	

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}

	public String getNumeroContacto() {
		return numeroContacto;
	}

	public void setNumeroContacto(String numeroContacto) {
		this.numeroContacto = numeroContacto;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getRuc() {
		return ruc;
	}

	public void setRuc(String ruc) {
		this.ruc = ruc;
	}

	public List<Vivienda> getListaDeseo() {
		return listaDeseo;
	}

	public void setListaDeseo(List<Vivienda> listaDeseo) {
		this.listaDeseo = listaDeseo;
	}

	public ResumenDiseno getViviendaDiseno() {
		return viviendaDiseno;
	}

	public void setViviendaDiseno(ResumenDiseno viviendaDiseno) {
		this.viviendaDiseno = viviendaDiseno;
	}
	
	
}
