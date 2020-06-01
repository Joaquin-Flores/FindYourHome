package com.foundyourhome.relaciones.entidades;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "TP_VIVIENDA")
public class Vivienda implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CODIGO_VIVIENDA")
	private Long codigo;

	@Column(unique = true, length = 20)
	private String tipoTerreno;
	private Double precio;
	private Double numHabitaciones;
	private Double numBano;
	private String tieneGaraje;
	private String permiteMascota;
	private String tienecontrolRenta;
	private String tipoPiso;
	private String colorPiso;
	private String tieneCalefaccion;
	private String tipoEstructura;
	private String tipoExterior;
	private String tipoHogar;
	private String base;
	private String techo;
	private String nuevaConstruccion;
	private String anoConstruccion;
	private String dimension;
	private String ubicacion;

	// Diseno como plano son imagenes no se que variable ponerle
	private byte[] imagenDiseno;
	private byte[] imagenPlano;

	@ManyToOne
	@JoinColumn(name = "CODIGO_PUBLICADOR")
	private Publicador publicador;

	// Lista deseos
	@ManyToMany(mappedBy = "listaDeseo")
	@JsonIgnoreProperties("cliente")
	private List<Cliente> cliente;

	@OneToOne(mappedBy = "vivienda")
	@JsonIgnore
	private ResumenDiseno resumenDiseno;

	public Vivienda(Long codigo, String tipoTerreno, Double precio, Double numHabitaciones, Double numBano,
			String tieneGaraje, String permiteMascota, String tienecontrolRenta, String tipoPiso, String colorPiso,
			String tieneCalefaccion, String tipoEstructura, String tipoExterior, String tipoHogar, String base,
			String techo, String nuevaConstruccion, String anoConstruccion, String dimension, String ubicacion,
			byte[] imagenDiseno, byte[] imagenPlano, Publicador publicador, List<Cliente> cliente,
			ResumenDiseno resumenDiseno) {
		super();
		this.codigo = codigo;
		this.tipoTerreno = tipoTerreno;
		this.precio = precio;
		this.numHabitaciones = numHabitaciones;
		this.numBano = numBano;
		this.tieneGaraje = tieneGaraje;
		this.permiteMascota = permiteMascota;
		this.tienecontrolRenta = tienecontrolRenta;
		this.tipoPiso = tipoPiso;
		this.colorPiso = colorPiso;
		this.tieneCalefaccion = tieneCalefaccion;
		this.tipoEstructura = tipoEstructura;
		this.tipoExterior = tipoExterior;
		this.tipoHogar = tipoHogar;
		this.base = base;
		this.techo = techo;
		this.nuevaConstruccion = nuevaConstruccion;
		this.anoConstruccion = anoConstruccion;
		this.dimension = dimension;
		this.ubicacion = ubicacion;
		this.imagenDiseno = imagenDiseno;
		this.imagenPlano = imagenPlano;
		this.publicador = publicador;
		this.cliente = cliente;
		this.resumenDiseno = resumenDiseno;
	}

	public Vivienda() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public Double getPrecio() {
		return precio;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
	}

	public Double getNumHabitaciones() {
		return numHabitaciones;
	}

	public void setNumHabitaciones(Double numHabitaciones) {
		this.numHabitaciones = numHabitaciones;
	}

	public Double getNumBano() {
		return numBano;
	}

	public void setNumBano(Double numBano) {
		this.numBano = numBano;
	}

	public String getTieneGaraje() {
		return tieneGaraje;
	}

	public void setTieneGaraje(String tieneGaraje) {
		this.tieneGaraje = tieneGaraje;
	}

	public String getPermiteMascota() {
		return permiteMascota;
	}

	public void setPermiteMascota(String permiteMascota) {
		this.permiteMascota = permiteMascota;
	}

	public String getTienecontrolRenta() {
		return tienecontrolRenta;
	}

	public String getTipoTerreno() {
		return tipoTerreno;
	}

	public void setTipoTerreno(String tipoTerreno) {
		this.tipoTerreno = tipoTerreno;
	}

	public void setTienecontrolRenta(String tienecontrolRenta) {
		this.tienecontrolRenta = tienecontrolRenta;
	}

	public String getTipoPiso() {
		return tipoPiso;
	}

	public void setTipoPiso(String tipoPiso) {
		this.tipoPiso = tipoPiso;
	}

	public String getColorPiso() {
		return colorPiso;
	}

	public void setColorPiso(String colorPiso) {
		this.colorPiso = colorPiso;
	}

	public String getTieneCalefaccion() {
		return tieneCalefaccion;
	}

	public void setTieneCalefaccion(String tieneCalefaccion) {
		this.tieneCalefaccion = tieneCalefaccion;
	}

	public String getTipoEstructura() {
		return tipoEstructura;
	}

	public void setTipoEstructura(String tipoEstructura) {
		this.tipoEstructura = tipoEstructura;
	}

	public String getTipoExterior() {
		return tipoExterior;
	}

	public void setTipoExterior(String tipoExterior) {
		this.tipoExterior = tipoExterior;
	}

	public String getTipoHogar() {
		return tipoHogar;
	}

	public void setTipoHogar(String tipoHogar) {
		this.tipoHogar = tipoHogar;
	}

	public String getBase() {
		return base;
	}

	public void setBase(String base) {
		this.base = base;
	}

	public String getTecho() {
		return techo;
	}

	public void setTecho(String techo) {
		this.techo = techo;
	}

	public String getNuevaConstruccion() {
		return nuevaConstruccion;
	}

	public void setNuevaConstruccion(String nuevaConstruccion) {
		this.nuevaConstruccion = nuevaConstruccion;
	}

	public String getAnoConstruccion() {
		return anoConstruccion;
	}

	public void setAnoConstruccion(String anoConstruccion) {
		this.anoConstruccion = anoConstruccion;
	}

	public String getDimension() {
		return dimension;
	}

	public void setDimension(String dimension) {
		this.dimension = dimension;
	}

	public String getUbicacion() {
		return ubicacion;
	}

	public void setUbicacion(String ubicacion) {
		this.ubicacion = ubicacion;
	}

	public byte[] getImagenDiseno() {
		return imagenDiseno;
	}

	public void setImagenDiseno(byte[] imagenDiseno) {
		this.imagenDiseno = imagenDiseno;
	}

	public byte[] getImagenPlano() {
		return imagenPlano;
	}

	public void setImagenPlano(byte[] imagenPlano) {
		this.imagenPlano = imagenPlano;
	}

	public Publicador getPublicador() {
		return publicador;
	}

	public void setPublicador(Publicador publicador) {
		this.publicador = publicador;
	}

	public List<Cliente> getCliente() {
		return cliente;
	}

	public void setCliente(List<Cliente> cliente) {
		this.cliente = cliente;
	}

	public ResumenDiseno getResumenDiseno() {
		return resumenDiseno;
	}

	public void setResumenDiseno(ResumenDiseno resumenDiseno) {
		this.resumenDiseno = resumenDiseno;
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
		Vivienda other = (Vivienda) obj;
		if (codigo == null) {
			if (other.codigo != null)
				return false;
		} else if (!codigo.equals(other.codigo))
			return false;
		return true;
	}

}
