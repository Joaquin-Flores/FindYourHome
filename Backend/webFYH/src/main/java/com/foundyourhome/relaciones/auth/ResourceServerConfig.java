package com.foundyourhome.relaciones.auth;

import java.util.Arrays;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableResourceServer //Activamos el Servidor de Configuración de Accesos
public class ResourceServerConfig extends ResourceServerConfigurerAdapter {

	@Override ///Reglas de seguridad de nuestros EndPoints
	public void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/**","/images/**").permitAll()
		//.antMatchers("/api/**").permitAll()
		.antMatchers("/api/registrarcliente").permitAll()
		.antMatchers("/api/registrarpublicador").permitAll()
		.antMatchers("/api/registrarvivienda/{id}").hasRole("PUBLICADOR")
		.antMatchers("/api/uploadplano/{id}").permitAll()
		.antMatchers("/api/uploaddiseno/{id}").permitAll()
		.antMatchers("/api/viviendas").hasAnyRole("CLIENTE", "PUBLICADOR")
		.antMatchers("/api/obtenerprimerimagen/{id}").hasAnyRole("CLIENTE", "PUBLICADOR")
		.antMatchers("/api/filtradogeneral/**").hasAnyRole("CLIENTE", "PUBLICADOR")
		.antMatchers("/api/registrarlistadeseocliente/{id}/{id}").hasRole("CLIENTE")
		.antMatchers("/api/obtenerimagenplano/{id}").hasAnyRole("CLIENTE","PUBLICADOR")
		.antMatchers("/api/obtenerimagendiseno/{id}").hasAnyRole("CLIENTE","PUBLICADOR")
		.antMatchers("/api/publicadorvivienda/{id}").hasAnyRole("CLIENTE","PUBLICADOR")
		.antMatchers("/api/viviendabypublicador/{id}").hasAnyRole("CLIENTE","PUBLICADOR")
		.antMatchers("/api/registrarcontacto/{id}/{id}").hasAnyRole("CLIENTE","PUBLICADOR")
		.antMatchers("/api/registrarestilo/{id}").hasRole("CLIENTE")
		.antMatchers("/api/registrarcolor/{id}").hasRole("CLIENTE")
		.antMatchers("/api/actualizarcliente/{id}").hasRole("CLIENTE")
		.antMatchers("/api/clientevivienda/{id}").hasRole("CLIENTE")
		.antMatchers("/api/vivienda/{id}").hasAnyRole("CLIENTE","PUBLICADOR")
		.antMatchers("/api/eliminarvivienda/{id}").hasRole("PUBLICADOR")
		.antMatchers("/api/actualizarvivienda/{id}").hasRole("PUBLICADOR")
		.anyRequest().authenticated()	
		.and().cors().configurationSource(corsConfigurationSource());
	}
	
	@Bean//CORS
	public CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
		config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
		config.setAllowCredentials(true);
		config.setAllowedHeaders(Arrays.asList("Content-Type", "Authorization"));
		
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", config);
		return source;
	}
	
	@Bean//registra el Corse de arriba
	public FilterRegistrationBean<CorsFilter> corsFilter(){
		FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<CorsFilter>(new CorsFilter(corsConfigurationSource()));
		bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
		return bean;
	}

	
}

