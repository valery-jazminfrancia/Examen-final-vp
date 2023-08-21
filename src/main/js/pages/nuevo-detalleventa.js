const React = require('react');
const { useState, useEffect } = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const NuevoVentaDetallePage = () => {
    let { id } = useParams();
    const [ventas, setVentas] = useState([]);
    const [productos, setProductos] = useState([]);
    const [cantidad, setCantidad] = useState('');
    const [idVenta, setIdVenta] = useState('');
    const [idProducto, setIdProducto] = useState('');
    const [ventaTotal, setVentaTotal] = useState(''); // Nuevo estado para el total de la venta
    const [nombreProducto, setNombreProducto] = useState(''); // Nuevo estado para el nombre del producto

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/ventadetalles',
            entity: {
                ventadetalle: 'http://localhost:8080/api/ventadetalles/' + id,
                venta: 'http://localhost:8080/api/ventas/' + idVenta,
                producto: 'http://localhost:8080/api/productos/' + idProducto,
                cantidad: cantidad
            },
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
            window.location = '/';
        });
    };

    useEffect(() => {
        // Obtener la venta seleccionada
        client({
            method: 'GET',
            path: '/api/ventas/' + id
        }).done(response => {
            setVentaTotal(response.entity.total);
        });
        
        
        // Obtener lista de ventas y productos
        client({
            method: 'GET',
            path: '/api/ventas'
        }).done(response => {
            let ventasData = [];
            response.entity._embedded.ventas.map(venta => {
                ventasData.push({ value: venta._links.self.href.split('/').slice(-1), label: venta.total });
            });
            setVentas(ventasData);
        });

        client({
            method: 'GET',
            path: '/api/productos'
        }).done(response => {
            let productosData = [];
            response.entity._embedded.productos.map(producto => {
                productosData.push({ value: producto._links.self.href.split('/').slice(-1), label: producto.nombre });
            });
            setProductos(productosData);
        });
    }, []);

    return (
        <>
            <h1>Nuevo Venta Detalle</h1>
            <p>Total de la venta: {ventaTotal}</p> {/* Mostrar el total de la venta */}
            <form onSubmit={handleSubmit}>
                <label htmlFor='ventas'>Venta</label>
                <select name="venta" id="venta" onChange={(e) => { setIdVenta(e.target.value) }}>
                    {ventas.map(venta => {
                        return (
                            <option key={venta.value} value={venta.value}>{venta.label}</option>
                        );
                    })}
                </select>

                <label>Producto</label>
                <select name="producto" id="producto" onChange={(e) => { setIdProducto(e.target.value); setNombreProducto(e.target.options[e.target.selectedIndex].text) }}>
                    {productos.map(producto => {
                        return (
                            <option key={producto.value} value={producto.value}>{producto.label}</option>
                        );
                    })}
                </select>

                <label>Cantidad</label>
                <input type="text" id="cantidad" name="cantidad" onChange={(e) => setCantidad(e.target.value)} />
                <p>Nombre del producto seleccionado: {nombreProducto}</p> {/* Mostrar el nombre del producto */}
                <input type="submit" value="Nuevo Venta Detalle" />
            </form>
            <Link to="/">Volver</Link>
        </>
    );
};

module.exports = NuevoVentaDetallePage;
