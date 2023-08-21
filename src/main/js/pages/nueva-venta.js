const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');
const { useState } = require('react');

const PageNuevaVenta = () => {

    const [total, setTotal] = useState('');
   

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/ventas',
            entity: { total:total },
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
            window.location = '/';
        });
    }

    return (
        <>
            <h1>Nueva Venta</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor='total'>total</label>
                <input type="text" id="total" name="total" onChange={(e)=>setTotal(e.target.value)} />
                <br />
                
                
                <input type="submit" value="Nueva venta" />
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageNuevaVenta;