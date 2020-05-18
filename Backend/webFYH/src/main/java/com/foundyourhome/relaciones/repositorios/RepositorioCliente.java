package com.foundyourhome.relaciones.repositorios;



import org.springframework.data.jpa.repository.JpaRepository;


import com.foundyourhome.relaciones.entidades.Cliente;


public interface RepositorioCliente extends JpaRepository<Cliente, Long>{

}
