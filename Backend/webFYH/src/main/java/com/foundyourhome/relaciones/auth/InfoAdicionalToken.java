package com.foundyourhome.relaciones.auth;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.common.DefaultOAuth2AccessToken;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.TokenEnhancer;
import org.springframework.stereotype.Component;

import com.foundyourhome.relaciones.entidades.Usuario;
import com.foundyourhome.relaciones.repositorios.RepositorioUsuario;

@Component
public class InfoAdicionalToken implements TokenEnhancer{
	
	@Autowired
	private RepositorioUsuario repositorioUsuario;

	@Override
	public OAuth2AccessToken enhance(OAuth2AccessToken accessToken, OAuth2Authentication authentication) {
		
		Usuario usuario = repositorioUsuario.findByUsername(authentication.getName());
		Map<String, Object> info = new HashMap<>();
		info.put("info_adicional", "Hola que tal!: ".concat(authentication.getName()));
		
		info.put("email", usuario.getUsername());
		info.put("contrasena", usuario.getPassword());
		info.put("publicador", usuario.getPublicador());
		info.put("cliente", usuario.getCliente());
		
		((DefaultOAuth2AccessToken) accessToken).setAdditionalInformation(info);
		
		return accessToken;
	}
}