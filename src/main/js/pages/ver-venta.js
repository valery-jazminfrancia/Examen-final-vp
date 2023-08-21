const React = require('react');
const client = require('../client');
const { Link, useParams} = require('react-router-dom');
const {useState, useEffect} = require('react');


const PageVerVenta = (props) => {

    // const id = props.match.params.id;
    let { id } = useParams();
    const [venta, setVenta] = useState({});

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/ventas/' + id
        }).done(response => {
            setVenta(response.entity);
        });
    }, []);


    return (
        <>
            <h1>Ver Venta</h1>
            <table>
                <tr>
                    <th>TOTAL</th>
                    <td>{venta.total}</td>
                </tr>
               
            </table>

            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageVerVenta;