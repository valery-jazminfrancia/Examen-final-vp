const React = require('react');
const { useState, useEffect } = require('react');
const { useParams, Link } = require('react-router-dom');
const client = require('../client');

const PageEditarDetalleVenta = () => {

    const { id } = useParams();
    const [detalleVenta, setDetalleVenta] = React.useState({});
    const [venta, setVenta] = useState({});
    const [producto, setProducto] = useState({});

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/ventadetalles/' + id,
            headers: { 'Content-Type': 'application/json' }
        }).done((response) => {
            setDetalleVenta(response.entity);
            setVenta(response.entity.ventas || {});
            setProducto(response.entity.productos || {});
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/ventadetalles/' + id,
            headers: { 'Content-Type': 'application/json' },
            entity: detalleVenta
        }).done(() => window.location = "/")
    }

    return (
        <>
            <h1>Editar Detalle de Venta: {id}</h1>

            <form onSubmit={handleSubmit}>

            <label>TOTAL</label>
                <input 
                    type="text"
                    name="total"
                    value={venta.total}
                    onChange={(e)=>{setVenta({...venta, total: e.target.value})}} />
                <br/>

                <label>NOMBRE</label>
                <input 
                    type="text"
                    name="nombre"
                    value={producto.nombre}
                    onChange={(e)=>{setProducto({...producto, nombre: e.target.value})}} />
                <br/>

                <label>Cantidad</label>
                <input
                    type="text"
                    name="cantidad"
                    value={detalleVenta.cantidad || ''}
                    onChange={(e) => setDetalleVenta({ ...detalleVenta, cantidad: e.target.value })} />
                <br />

                <input type='submit' value={`Editar Detalle de Venta ${id}`} />
            </form>
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = PageEditarDetalleVenta;
