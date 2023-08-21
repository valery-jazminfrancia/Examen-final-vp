package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Producto {

    private @Id @GeneratedValue Long id;
    private String nombre;
    private Float precio;
   
   
   
   
    public Producto() {
    }




    public Producto(String nombre, Float precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    @Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Producto b = (Producto) o;
		return Objects.equals(id, b.id) &&
			Objects.equals(nombre, b.nombre);
	}	

    @Override
	public int hashCode() {

		return Objects.hash(id, nombre,precio);
	}
    @Override
	public String toString() {
		return "Banda{" +
			"id=" + id +
			", nombre=" + nombre + 
            "precio  = '" + precio + '\''+
			'}';
	}




    public Long getId() {
        return id;
    }




    public void setId(Long id) {
        this.id = id;
    }




    public String getNombre() {
        return nombre;
    }




    public void setNombre(String nombre) {
        this.nombre = nombre;
    }




    public Float getPrecio() {
        return precio;
    }




    public void setPrecio(Float precio) {
        this.precio = precio;
    }


    

    

    
    
}
