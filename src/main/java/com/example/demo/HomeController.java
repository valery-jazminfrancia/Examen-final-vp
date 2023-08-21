package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
public class HomeController {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@GetMapping(path="/api/ventadetalles/{id}/formacion")
	public @ResponseBody List<Map<String, Object>> formacion(@PathVariable Integer id){
		String sql = "SELECT vd.id as ID, p.nombre as PRODUCTO, v.total as VENTA " +
		"FROM ventadetalle vd " +
		"JOIN producto p ON vd.id_producto = p.id " +
		"JOIN venta v ON vd.id_venta = v.id " +
		"WHERE vd.id = ?";
		List<Map<String, Object>> queryResult = jdbcTemplate.queryForList(sql, id);
		return queryResult;
	}

}