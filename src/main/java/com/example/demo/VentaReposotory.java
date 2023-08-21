package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "ventas", path = "ventas")

public interface VentaReposotory extends CrudRepository<Venta, Long> {
    
}
