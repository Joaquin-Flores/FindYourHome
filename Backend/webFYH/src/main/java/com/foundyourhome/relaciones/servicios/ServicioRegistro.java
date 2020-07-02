package com.foundyourhome.relaciones.servicios;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.foundyourhome.relaciones.auth.SpringSecurityConfig;
import com.foundyourhome.relaciones.entidades.Cliente;
import com.foundyourhome.relaciones.entidades.Color;
import com.foundyourhome.relaciones.entidades.Estilo;
import com.foundyourhome.relaciones.entidades.ListaDeseo;
//import com.foundyourhome.relaciones.entidades.Diseno;
import com.foundyourhome.relaciones.entidades.Publicador;
import com.foundyourhome.relaciones.entidades.Role;
import com.foundyourhome.relaciones.entidades.Contacto;
import com.foundyourhome.relaciones.entidades.Suscripcion;
import com.foundyourhome.relaciones.entidades.Usuario;
import com.foundyourhome.relaciones.entidades.Vivienda;
import com.foundyourhome.relaciones.repositorios.RepositorioCliente;
import com.foundyourhome.relaciones.repositorios.RepositorioColor;
import com.foundyourhome.relaciones.repositorios.RepositorioEstilo;
import com.foundyourhome.relaciones.repositorios.RepositorioListaDeseo;
import com.foundyourhome.relaciones.repositorios.RepositorioPublicador;
import com.foundyourhome.relaciones.repositorios.RepositorioResumenDiseno;
import com.foundyourhome.relaciones.repositorios.RepositorioRole;
import com.foundyourhome.relaciones.repositorios.RepositorioSuscripcion;
import com.foundyourhome.relaciones.repositorios.RepositorioUsuario;
import com.foundyourhome.relaciones.repositorios.RepositorioVivienda;

@Service
public class ServicioRegistro {
	
	@Autowired
	RepositorioCliente repositorioCliente;
	
	@Autowired
	RepositorioPublicador repositorioPublicador;
	
	@Autowired
	RepositorioVivienda repositorioVivienda;
	
	@Autowired
	RepositorioResumenDiseno repositorioResumenDiseno;
	
	@Autowired
	RepositorioSuscripcion repositorioSuscripcion;
	
	@Autowired
	RepositorioEstilo repositorioEstilo;
	
	@Autowired
	RepositorioColor repositorioColor;
	
	@Autowired
	RepositorioListaDeseo repositorioListaDeseo;
	@Autowired
	RepositorioUsuario repositorioUsuario;
	
	@Autowired
	RepositorioRole repositorioRole;
	
	@Autowired
	SpringSecurityConfig passwordEncoder;
	
	@Transactional(rollbackFor = Exception.class)
	public Vivienda registrarVivienda(Long codigo, Vivienda vivienda)  throws Exception {
		Publicador publicador = repositorioPublicador.findById(codigo).orElseThrow(() -> new Exception("No se encontro entidad"));
		vivienda.setPublicador(publicador);
		vivienda.setFueContactado(0);
		return repositorioVivienda.save(vivienda);
	}

	//REGISTRO DE LAS ENTIDADES
	@Transactional(rollbackFor = Exception.class)
	public Cliente registrarCliente(Cliente cliente) throws Exception {
		cliente.setRole("ROLE_CLIENTE");
		Role role = repositorioRole.findByNombre(cliente.getRole());
		List<Role> r = new ArrayList<>();
		r.add(role);
		Usuario usuario = new Usuario(cliente.getCorreo(), passwordEncoder.passwordEncoder().encode(cliente.getContrasena()), true, r, cliente, null);
		repositorioUsuario.save(usuario);
		cliente.setCreatedDate( new Date());
		return repositorioCliente.save(cliente);
	}
	
	@Transactional(rollbackFor = Exception.class)
	public Publicador registrarPublicador(Publicador publicador) throws Exception {
		publicador.setRole("ROLE_PUBLICADOR");
		System.out.println("aqui");
		Role role = repositorioRole.findByNombre(publicador.getRole());
		List<Role> r = new ArrayList<>();
		r.add(role);
		Usuario usuario = new Usuario(publicador.getCorreo(), passwordEncoder.passwordEncoder().encode(publicador.getContrasena()), true, r, null, publicador);
		repositorioUsuario.save(usuario);
		publicador.setCreatedDate(new Date());
		return repositorioPublicador.save(publicador);
	}
	
	@Transactional(rollbackFor = Exception.class)
	public Estilo registrarEstilo(Estilo estilo, Cliente cliente) {
		estilo.setCliente(cliente);
		return repositorioEstilo.save(estilo);
	}
	
	@Transactional(rollbackFor = Exception.class)
	public Color registrarColor(Color color, Cliente cliente) {
		color.setCliente(cliente);
		return repositorioColor.save(color);
	}

	@Transactional(rollbackFor = Exception.class)
	public ListaDeseo registrarListaDeseo(Long CCliente, Long CVivienda, ListaDeseo listaDeseo) throws Exception {
		Vivienda vivienda = repositorioVivienda.findById(CVivienda).orElseThrow(() -> new Exception("No se encontro entidad"));
		Cliente cliente = repositorioCliente.findById(CCliente).orElseThrow(() -> new Exception("No se encontro entidad"));

		List<ListaDeseo> lD = repositorioListaDeseo.findAll();
		for(ListaDeseo l: lD) {
			if(l.getCliente().getCodigo() == CCliente && l.getVivienda().getCodigo() == CVivienda) {
				return null;
			}
		}
		
		listaDeseo.setCliente(cliente);
		listaDeseo.setVivienda(vivienda);
		return repositorioListaDeseo.save(listaDeseo);
	}
	
	@Transactional(rollbackFor = Exception.class)
	public Contacto registrarContacto(Contacto contacto, Long CCliente, Long CVivienda) throws Exception{
		Vivienda vivienda = repositorioVivienda.findById(CVivienda).orElseThrow(() -> new Exception("No se encontro entidad"));
		Cliente cliente = repositorioCliente.findById(CCliente).orElseThrow(() -> new Exception("No se encontro entidad"));
		Publicador publicador = vivienda.getPublicador();
		
		vivienda.setFueContactado(1);;
		contacto.setCliente(cliente);
		contacto.setPublicador(publicador);
		contacto.setVivienda(vivienda);
		
		return repositorioResumenDiseno.save(contacto);
	}
	
	@Transactional(rollbackFor = Exception.class)
	public Suscripcion registrarSuscripcion(Suscripcion suscripcion){
		return repositorioSuscripcion.save(suscripcion);
	}
}	
