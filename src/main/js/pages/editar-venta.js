const React = require('react');
const {useState, useEffect} = require('react');
const {useParams, Link} = require('react-router-dom');
const client = require('../client');

const PageEditarVenta = ()=>{

    const {id} = useParams();
    const [venta, setVenta] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/ventas/'+id,
            headers: {'Content-Type': 'application/json'}
        }).done((response)=>{
            setVenta(response.entity)
        })    
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/ventas/'+id,
            headers: {'Content-Type': 'application/json'},
            entity: venta
        }).done(()=>window.location = "/")
    }

    return(
        <>
            <h1>Editar Venta: {id}</h1>

            <form onSubmit={handleSubmit}>

                <label>TOTAL</label>
                <input 
                    type="text"
                    name="total"
                    value={venta.total}
                    onChange={(e)=>{setVenta({...venta, total: e.target.value})}} />
                <br/>

               
                
                <input type='submit' value={`Editar Ventas ${id}`} />
            </form>
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = PageEditarVenta