const React = require('react');
const {useState, useEffect} = require('react');
const {useParams, Link} = require('react-router-dom');
const client = require('../client');

const PageEditarProducto = ()=>{

    const {id} = useParams();
    const [producto, setProducto] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/productos/'+id,
            headers: {'Content-Type': 'application/json'}
        }).done((response)=>{
            setProducto(response.entity)
        })    
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/productos/'+id,
            headers: {'Content-Type': 'application/json'},
            entity: producto
        }).done(()=>window.location = "/")
    }

    return(
        <>
            <h1>Editar Producto: {id}</h1>

            <form onSubmit={handleSubmit}>

                <label>NOMBRE</label>
                <input 
                    type="text"
                    name="nombre"
                    value={producto.nombre}
                    onChange={(e)=>{setProducto({...producto, nombre: e.target.value})}} />
                <br/>


                <label>PRECIO</label>
                <input 
                    type="text"
                    name="precio"
                    value={producto.precio}
                    onChange={(e)=>{setProducto({...producto, precio: e.target.value})}} />
                <br/>

               
                
                <input type='submit' value={`Editar Producto ${id}`} />
            </form>
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = PageEditarProducto