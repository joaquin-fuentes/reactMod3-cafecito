import React from 'react';
import { Container, Button, Table } from "react-bootstrap"
import ItemProducto from './producto/ItemProducto';
import { Link, NavLink } from "react-router-dom"
import { useEffect, useState } from 'react';
import { obtenerProductos } from '../helpers/queries';


const Administrador = () => {

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        obtenerProductos().then((respuesta)=>{
            setProductos(respuesta)
        })
    },[])

    return (
        <Container className='my-5 main'>
            <div className='d-flex justify-content-between '>
                <h3>Productos disponibles</h3>
                <Link to={"/administrador/crear"} className={"btn btn-primary"} >Agregar</Link>
            </div>
            <hr />
            <Table striped responsive bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Cod</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>URL de imagen</th>
                        <th>Categoria</th>
                        <th className='text-center'>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((producto)=>{
                          return  <ItemProducto producto={producto} key={producto.id}></ItemProducto>
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default Administrador;