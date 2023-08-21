const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const PageHome = require('./pages/home');
const PageNuevaVenta = require('./pages/nueva-venta');
const PageNuevoProducto = require("./pages/nuevo-producto");
const NuevoVentaDetallePage = require("./pages/nuevo-detalleventa");
const PageVerVenta = require("./pages/ver-venta");
const PageVerProducto = require("./pages/ver-producto");
const PageVerDetalleVenta = require("./pages/ver-detalleventa");
const PageEditarVenta = require("./pages/editar-venta");
const PageEditarProducto = require("./pages/editar-producto");
const PageEditarDetalleVenta = require("./pages/editar-detalleventa");


const router = createBrowserRouter([
	{path: '/', element: <PageHome />},
	
	{path: '/nueva-venta', element: <PageNuevaVenta/>},
    {path: '/nuevo-producto', element: <PageNuevoProducto/>},
    {path: '/nuevo-detalleventa', element: <NuevoVentaDetallePage/>},
	{path: '/ver-venta/:id', element: <PageVerVenta/>},
	{path: '/ver-producto/:id', element: <PageVerProducto/>},
	{path: '/ver-detalleventa/:id', element: <PageVerDetalleVenta/>},
	{path: '/editar-venta/:id', element: <PageEditarVenta/>},
	{path: '/editar-producto/:id', element: <PageEditarProducto/>},
	{path: '/editar-detalleventa/:id', element: <PageEditarDetalleVenta/>},
    
	
])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)