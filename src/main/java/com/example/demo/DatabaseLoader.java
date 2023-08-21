package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final VentaReposotory repositoryV;
    private final ProductoRepository repositoryP;
    private final VentaDetalleRepository repositoryVD;

    @Autowired
    public DatabaseLoader(VentaReposotory repositoryV, ProductoRepository repositoryP, VentaDetalleRepository repositoryVD) {
        this.repositoryV = repositoryV;
        this.repositoryP = repositoryP;
        this.repositoryVD = repositoryVD;
    }

    @Override
    public void run(String... strings) throws Exception {
        // Crear productos
        Producto producto1 = new Producto("Producto 1", 10.0f);
        Producto producto2 = new Producto("Producto 2", 20.0f);
        repositoryP.save(producto1);
        repositoryP.save(producto2);

        // Crear ventas
        Venta venta1 = new Venta(30.0f);
        Venta venta2 = new Venta(40.0f);
        repositoryV.save(venta1);
        repositoryV.save(venta2);

        // Crear detalles de venta
        VentaDetalle detalle1 = new VentaDetalle(venta1, producto1, 2);
        VentaDetalle detalle2 = new VentaDetalle(venta2, producto2, 3);
        repositoryVD.save(detalle1);
        repositoryVD.save(detalle2);
    }
}
